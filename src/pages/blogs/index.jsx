import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from "@/components/Seo";
import Link from "next/link";
import BlurAnimation from "@/components/BlurAnimation";
import { AOSInit } from "@/components/Aos";
import Images from "@/components/Images";
import PageHeading from "@/components/PageHeading";
import TruncatedText from "@/components/TruncateWords";
const { htmlToText } = require("html-to-text");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useThemeContext } from "@/context/themeContext";

export default function Blogs({ blogPageDatas, getAllBlogsData }) {
  const pageData = blogPageDatas.data.pages.nodes[0];
  const allBlogs = getAllBlogsData.data.allBlogs.nodes;

  const { theme } = useThemeContext();

  const section1 = useRef();

  useGSAP(
    () => {
     // const section = document.querySelector(".section-1");
      const list = gsap.utils.toArray(".section-1 ul li");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });


      gsap.to(list, {
        rotation: 0,
        y: 0,
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1,
          // markers:true,
        },
      });
    },
    { scope: section1 }
  );

  const cleanHTML = (htmlString) => {
    return htmlToText(htmlString, {
      wordwrap: false,
    });
  };

  return (
    <>
      <Metatags data={blogPageDatas} />
      <Layout>
        <AOSInit />

        <PageHeading
          heading={pageData.title && pageData.title}
          subHeading={pageData.pages.subHeading && pageData.pages.subHeading}
        />

        <section className="section-1 pt-0" ref={section1}>
          <div className="container mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {" "}
              {/* Adjusted to use a grid layout with 30px gap */}
              {allBlogs &&
                allBlogs.map((blog, key) => (
                  <li
                    key={key}
                    className="card card-effect rounded-[30px] overflow-hidden">
                    <Link
                      title={`Read blog: ${blog.title}`}
                      href={`${frontendUrl}/blogs/${blog.slug}/`}
                      key={key}>
                      {blog.featuredImage && (
                        <Images
                          imageurl={blog.featuredImage.node.sourceUrl}
                          styles={""}
                          quality={100}
                          width={500}
                          height={500}
                          alt={blog.featuredImage.node.altText}
                          placeholder={true}
                          classes={`${
                            theme === "dark" && "opacity-[0.9] grayscale-[0.7]"
                          } block w-full`}
                        />
                      )}
                      <div
                        className={`${
                          theme === "dark"
                            ? "gap-[10px] px-[30px] pt-[10px] pb-[30px] "
                            : "gap-[16px] px-[34px] pt-[20px] pb-[40px]"
                        } grid `}>
                        <h2
                          className={`${
                            theme === "dark"
                              ? "text-lg font-semibold"
                              : "text-[24px]"
                          } mt-2`}>
                          {blog.title}
                        </h2>
                        <div className="overflow-hidden">
                          <p className="w-full block small">
                            <TruncatedText
                              text={blog && cleanHTML(blog.content)}
                              maxLength={200}
                            />
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    //BLOG PAGE DATA
    const blogPageData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
            pages(where: {id:839}) {
              nodes{
                title
                 pages{
                    subHeading
                  }
                     seoKeywords{
          seoKeywords
        }
                    seo {
                    canonical
focuskw
opengraphSiteName
                        metaDesc
                        metaKeywords
                        title
                        opengraphDescription
                        opengraphSiteName
                        opengraphUrl
                        opengraphImage {
                          altText
                          link
                          sourceUrl
                        }
                        opengraphType
                        opengraphTitle
                        opengraphModifiedTime
                        twitterDescription
                        twitterTitle
                        twitterImage {
                          sourceUrl
                        }
                      }
              }
      }
      }
          `,
        }),
        next: { revalidate: 10 },
      },
      {
        cache: "force-cache",
        cache: "no-store",
      }
    );
    const blogPageDatas = await blogPageData.json();

    //BLOG PAGE DATA
    const blogsData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
           allBlogs( first: 100 where: {orderby: {order: DESC, field: DATE}}){
              nodes{
                title
                content
                slug
                featuredImage{
                  node{
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
    
            `,
        }),
        next: { revalidate: 10 },
      },
      {
        cache: "force-cache",
        cache: "no-store",
      }
    );
    const getAllBlogsData = await blogsData.json();

    return {
      props: {
        blogPageDatas,
        getAllBlogsData,
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogPageDatas: {},
        getAllBlogsData: {},
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}
