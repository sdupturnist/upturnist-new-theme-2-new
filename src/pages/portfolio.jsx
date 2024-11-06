import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from "@/components/Seo";
import { AOSInit } from "@/components/Aos";
import ThreeDSlider from "@/components/WorkSlider";
import PageHeading from "@/components/PageHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ReadMore from "@/components/ReadMore";
import Images from "@/components/Images";

export default function Works({ worksPageData, worksDatas }) {
  const pageData = worksPageData.data.pages.nodes[0];

  const section1 = useRef();
  const section2 = useRef();

  useGSAP(
    () => {
      //const section = document.querySelector(".section-1");

     // gsap.set(section, { opacity: 0.2 });

      // gsap.to(section, {
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: section,
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: 1,
      //     onEnterBack: () => gsap.to(section, { opacity: 1 }),
      //   },
      // });
    },
    { scope: section1 }
  );

  useGSAP(
    () => {
     // const section = document.querySelector(".section-2");
      const img = document.querySelector(".section-2 .image-box-");

   //   gsap.set(section, { opacity: 0.2 });

      // gsap.to(section, {
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: section,
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: 1,
      //     // markers: true, // Uncomment for debugging
      //     onEnterBack: () => gsap.to(section, { opacity: 1 }),
      //   },
      // });

      gsap.set(img, { opacity: 0, rotate: 10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,
          //  markers: true, // Uncomment for debugging
          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });
      // Stagger the animations for each box
    },
    { scope: section2 }
  );

  return (
    <>
      <Metatags data={worksPageData} />
      <Layout>
        <AOSInit />
        <PageHeading
          heading={pageData.title && pageData.title}
          subHeading={pageData.pages.subHeading && pageData.pages.subHeading}
        />

        <section
          className="section-1 bg-box flex items-center sm:mt-[-100px] text-center"
          ref={section1}>
          <div className="container mx-auto">
            <ThreeDSlider popup="true" data={worksDatas} />
          </div>
        </section>

        {/* <section
          className="relative grid items-center section-2"
          ref={section2}>
          <div className="container">
            <div className="flex flex-col items-start lg:flex-row sm:gap-[100px] gap-[30px]">
              <div className="flex-1 lg:order-1 order-2">
                <h2 className="heading-2 mb-[20px]">
                  {pageData.pages.additionalDescriptionHeading &&
                    pageData.pages.additionalDescriptionHeading}
                </h2>
                <ReadMore maxLength={500}>
                  {pageData.pages.additionalDescription &&
                    pageData.pages.additionalDescription}
                </ReadMore>
                <div></div>
              </div>
              <div className="lg:sticky top-0 lg:order-2 order-1">
                <div className="image-box- mx-auto">
                  <div className="line"></div>

                  <Images
                    imageurl={
                      pageData.pages.additionalDescriptionImage.node
                        .sourceUrl &&
                      pageData.pages.additionalDescriptionImage.node.sourceUrl
                    }
                    styles={""}
                    quality={80}
                    width={"600"}
                    height={"550"}
                    alt={
                      pageData.pages.additionalDescriptionImage.node.altText &&
                      pageData.pages.additionalDescriptionImage.node.altText
                    }
                    placeholder={true}
                    classes={"block w-full"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    //WORKS PAGE DATA
    const worksData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
            pages(where: {id:978}) {
              nodes{
                title
                 pages{
                    subHeading
                  additionalDescription
                  additionalDescriptionHeading
                  additionalDescriptionImage{
                    node{
                      altText
                      sourceUrl
                    }
                  }
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
    const worksPageData = await worksData.json();

    //WORKS DATA
    const workData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Posts {
          works {
            nodes {
              title
              content
              works{
                link
                projectStory
              }
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
    const worksDatas = await workData.json();

    return {
      props: {
        worksPageData,
        worksDatas,
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        worksPageData: {},
        worksDatas: {},
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}
