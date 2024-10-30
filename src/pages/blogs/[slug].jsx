import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import Link from "next/link";
import MetatagsBlogSingle from "@/components/SeoBlogSingle";
import TruncatedText from "@/components/TruncateWords";
import { useEffect } from "react";
import { useRouter } from "next/router";
const { htmlToText } = require('html-to-text');


export default function BlogSingle({ singleBLogsData, blogSinglePageData, getAllBlogsData }) {

  const router = useRouter();



  const singleBlog = singleBLogsData?.data?.allBlogs?.nodes[0] ?? null;
  const allBlogs = getAllBlogsData?.data?.allBlogs?.nodes ?? null;

  function formatBlogDate(date_) {
    const originalDate = new Date(date_);
    return originalDate.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
  }

  const cleanHTML = (htmlString) => {
    return htmlToText(htmlString, {
      wordwrap: false,
    });
  };



  // useEffect(() => {
  // if(!singleBlog) {
  //     router.push('/404');
  //   }

  // }, [singleBlog])


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!singleBlog) {
        router.push('/404');
      }
    }, 1000); // Delay in milliseconds (e.g., 1000ms = 1 second)

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [singleBlog, router]);



  return (
    <>
      {singleBlog && (
        <>
          <MetatagsBlogSingle data={[singleBLogsData]} />
          <Layout>
            <AOSInit />
            <section className="sm:pt-[50px] pt-[20px]">
              <div className="container">
                <div className="grid gap-[30px] lg:max-w-[70%] mx-auto">
                  <div className="blog-single-">
                    <h1 className="heading-2">{singleBlog.title}​</h1>
                    <div className="my-[40px]">
                      <Images
                        imageurl={singleBlog.featuredImage?.node?.sourceUrl || 'sample-link'}
                        styles={''}
                        quality={100}
                        width={'1000'}
                        height={'500'}
                        alt={singleBlog.featuredImage?.node?.altText || 'no alt'}
                        title={singleBlog.featuredImage?.node?.altText || 'no alt'}
                        placeholder={true}
                        classes={'w-full block rounded-[12px]'}
                      />
                    </div>
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: singleBlog.content }} />
                    <p className="text-[1rem]">{formatBlogDate(singleBlog.date)}</p>
                  </div>
                  <div className="border-t border-[#ffffff14] pt-[30px] mt-[20px]">
                    <h3 className="sub-heading mb-[30px]">More blogs</h3>
                    <div className="inner-4">


                      <ul className="grid grid-cols-1 sm:grid-cols-2  gap-7"> {/* Adjusted to use a grid layout with 30px gap */}
                        {allBlogs && allBlogs.filter(post => post.slug !== singleBlog.slug).map((blog, key) => (
                          <li key={key} className="card card-effect rounded-[30px] overflow-hidden">
                            <Link
                              title={`Read blog: ${blog.title}`}
                              href={`${frontendUrl}/blogs/${blog.slug}/`}
                              key={key}
                            >
                              {blog.featuredImage && (
                                <Images
                                  imageurl={blog.featuredImage.node.sourceUrl}
                                  styles={''}
                                  quality={100}
                                  width={500}
                                  height={500}
                                  alt={blog.featuredImage.node.altText}
                                  placeholder={true}
                                  classes={'opacity-[0.9] grayscale-[0.7]'}
                                />
                              )}
                              <div className="px-[30px] pt-[10px] pb-[30px] grid gap-[10px]">
                                <h2 className="mt-2 text-lg font-semibold">{blog.title}</h2>
                                <div className="overflow-hidden">
                                  <p className="w-full block small">
                                    <TruncatedText text={blog && cleanHTML(blog.content)} maxLength={200} />
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <BlurAnimation position="top right" />
            </section>
          </Layout>
        </>
      )}
    </>
  );
}



export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  try {
    // Fetch the blog data based on slug
    const blogData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          allBlogs(where: {name: "${slug}"}) {
            nodes {
              title
              date
              content
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
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
        }`,
      }),
    });
    const singleBLogsData = await blogData.json();

    // Check if the blog data exists, otherwise return notFound
    // if (!singleBLogsData?.data?.allBlogs?.nodes.length) {
    //   return {
    //     notFound: true,
    //   };
    // }

    // Fetch the static page data
    const pageData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          pages(where: {id: 839}) {
            nodes {
              title
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              seo {
                canonical
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
        }`,
      }),
    });
    const blogSinglePageData = await pageData.json();

    // Fetch all blogs for the "More blogs" section
    const blogsData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          allBlogs(first: 4) {
            nodes {
              title
              content
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }`,
      }),
    });
    const getAllBlogsData = await blogsData.json();

    return {
      props: {
        singleBLogsData,
        blogSinglePageData,
        getAllBlogsData
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    // Fetch all blog slugs
    const res = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          allBlogs {
            nodes {
              slug
            }
          }
        }`,
      }),
    });

    const data = await res.json();
    const allBlogs = data?.data?.allBlogs?.nodes ?? [];

    // Map slugs to paths
    const paths = allBlogs.map(blog => ({
      params: { slug: blog.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // or 'false' to generate pages at build time
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}
