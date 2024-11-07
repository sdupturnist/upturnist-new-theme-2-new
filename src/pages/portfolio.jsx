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
          className="section-1 bg-box flex items-center sm:mt-[-100px] text-center lg:pb-[15vh] pb-[50px]"
          ref={section1}>
          <div className="container mx-auto">
            <ThreeDSlider popup="true" data={worksDatas} />
          </div>
        </section>
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
