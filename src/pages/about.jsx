import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from "@/components/Seo";
import { AOSInit } from "@/components/Aos";
import Images from "@/components/Images";
import TimelineDelivery from "@/components/TimelineDelivery";
import PageHeading from "@/components/PageHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ReadMore from "@/components/ReadMore";
import Timeline from "@/components/TimeLine";
import VideosSlider from "@/components/VideosSlider";
import { useThemeContext } from "@/context/themeContext";

export default function WhoWeAre({
  aboutPageData,
  coreValuesData,
  deliveryMethodData,
  teamsData,
  timelineData,
  videosData,
}) {
  const pageData = aboutPageData?.data?.pages?.nodes[0];
  const _coreValues = coreValuesData?.data?.allCoreValues?.nodes;
  const _deliveryMethod = deliveryMethodData?.data?.allDeliveryMethod?.nodes;
  const _teamsData = teamsData?.data?.teams?.nodes;
  const _timelineData = timelineData?.data?.allTimeLine?.nodes;
  const _videosData = videosData?.data?.allVideos?.nodes;

  const { theme } = useThemeContext();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();

  useGSAP(
    () => {
      const section = document.querySelector(".section-1");
      const item1 = document.querySelector(".section-1 .item-1");
      const item2 = document.querySelector(".section-1 .item-2");

      gsap.set(item1, {
        x: 2000,
      });

      gsap.set(item2, {
        x: -2000,
      });



      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });

      gsap.to(item1, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item1,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          //markers: true,
          onEnterBack: () => gsap.to(item1, { opacity: 1 }),
        },
      });

      gsap.to(item2, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item2,
          start: "top 95%",
          end: "bottom center",
          scrub: 1,
        markers: true,
          onEnterBack: () => gsap.to(item2, { opacity: 1 }),
        },
      });
    },
    { scope: section1 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-2");

    },
    { scope: section2 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-3");
      const img = document.querySelector(".section-3 .image-box-");

 

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true, // Uncomment for debugging
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });

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
    { scope: section3 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-4");
      const img = document.querySelector(".section-4 .image-box-");

 

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true, // Uncomment for debugging
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });

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
    { scope: section4 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-5");
      const list = gsap.utils.toArray(".section-5 ul li");
      const heading = document.querySelector(".section-5 .heading-2");
      const para = document.querySelector(".section-5 .para");

  

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
         
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });

      gsap.to(list, {
        rotation: 0,
        y: 0,
       
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      gsap.set(heading, {
        position: "relative",
        y: 0,
      });

      gsap.to(heading, {
        position: "sticky",
     
        y: "30%",
        scrollTrigger: {
          trigger: list,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });

      gsap.set(para, {
        position: "relative",
        y: 0,
      });

      gsap.to(para, {
        position: "sticky",
        y: "30%",
        scrollTrigger: {
          trigger: list,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(para, { position: "relative" }),
        },
      });
    },
    { scope: section5 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-6");

    

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });
    },
    { scope: section6 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-7");

 

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });
    },
    { scope: section7 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-8");

 

      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });
    },
    { scope: section8 }
  );

  return (
    <>
      <Metatags data={aboutPageData} />
      <Layout>
        <AOSInit />

        <PageHeading
          heading={pageData.title && pageData.title}
          subHeading={pageData.pages.subHeading && pageData.pages.subHeading}
          banner={
            aboutPageData &&
            aboutPageData?.data?.pages?.nodes[0]?.pages?.heroBanner?.node
              ?.sourceUrl
          }
        />

        <section
          className={`${
            theme === "dark" && "bg-box"
          } section-1 flex items-center sm:mt-[-100px] text-center overflow-hidden`}
          ref={section1}>
          <div className="container mx-auto">
            <div className="grid gap-[5px] sm:max-w-[70%] mx-auto">
              <div
                className="item-1 [&>*]:mb-[20px] [&>*]:block"
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.aboutUs.aboutDescription1 &&
                    pageData.aboutUs.aboutDescription1,
                }}
              />
              <div
                className="item-2 [&>*]:mb-[20px] [&>*]:block"
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.aboutUs.aboutDescription2 &&
                    pageData.aboutUs.aboutDescription2,
                }}
              />
            </div>
          </div>
        </section>

        <section className="section-2" ref={section2}>
          <div className="container">
            <h3 className="heading-2 text-center sm:mb-[70px] mb-[30px]">
              {pageData.aboutUs.journeyHeading &&
                pageData.aboutUs.journeyHeading}
            </h3>
            <div className="mx-auto lg:max-w-[80%]">
              <Timeline data={_timelineData} />
            </div>
          </div>
        </section>

        <section
          className="relative grid items-center section-4 "
          ref={section4}>
          <div className="container">
            <div className="card card-lg card-effect sm:p-[80px] p-[40px] rounded-[30px] flex flex-col items-center lg:flex-row sm:gap-[100px] gap-[30px]">
              <div className="flex-1 lg:order-1 order-2">
                <h2 className="heading-2 mb-[20px]">
                  {pageData.aboutUs.approchHeading &&
                    pageData.aboutUs.approchHeading}
                </h2>
                <ReadMore maxLength={500}>
                  {pageData.aboutUs.approachContent &&
                    pageData.aboutUs.approachContent}
                </ReadMore>
                <div></div>
              </div>
              <div className="image-box- mx-auto lg:order-2 order-1">
                <div className="line"></div>
                <Images
                  imageurl={
                    pageData.aboutUs.approchBanner.node.sourceUrl &&
                    pageData.aboutUs.approchBanner.node.sourceUrl
                  }
                  styles={""}
                  quality={80}
                  width={"600"}
                  height={"550"}
                  alt={
                    pageData.aboutUs.approchBanner.node.altText &&
                    pageData.aboutUs.approchBanner.node.altText
                  }
                  placeholder={true}
                  classes={"block w-full"}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className=" relative grid items-center section-4 overflow-hidden"
          ref={section4}>
          <div className="container">
            <div className="card card-lg card-effect sm:p-[80px] p-[40px] rounded-[30px] flex flex-col items-center lg:flex-row sm:gap-[100px] gap-[30px]">
              <div className="image-box- mx-auto">
                <div className="line"></div>
                <Images
                  imageurl={
                    pageData.aboutUs.marketingStrategy.node.sourceUrl &&
                    pageData.aboutUs.marketingStrategy.node.sourceUrl
                  }
                  styles={""}
                  quality={80}
                  width={"600"}
                  height={"550"}
                  alt={
                    pageData.aboutUs.marketingStrategy.node.altText &&
                    pageData.aboutUs.marketingStrategy.node.altText
                  }
                  placeholder={true}
                  classes={"block w-full"}
                />
              </div>
              <div className="flex-1">
                <h2 className="heading-2 mb-[20px]">
                  {pageData.aboutUs.aboutBottomHeading &&
                    pageData.aboutUs.aboutBottomHeading}
                </h2>
                <div className="grid gap-[16px]">
                  <ReadMore maxLength={500}>
                    {pageData.aboutUs.aboutBottomDescription &&
                      pageData.aboutUs.aboutBottomDescription}
                  </ReadMore>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section className=" relative section-5" ref={section5}>
          <div className="container grid lg:grid-cols-5 gap-[70px]">
            <div className="lg:col-span-2 lg:sticky top-[50px] z-10">
              {" "}
              {/* Sticky Column */}
              <h2 className="heading-2 top-0 mb-[20px]">
                {pageData.aboutUs.coreValuesHeading &&
                  pageData.aboutUs.coreValuesHeading}
              </h2>
              <p className="para">
                {pageData.aboutUs.coreValuesDescription &&
                  pageData.aboutUs.coreValuesDescription}
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid md:grid-cols-2 gap-[30px] col-wrpr">
                {_coreValues &&
                  _coreValues.map((item, key) => {
                    return (
                      <li key={key} className="card p-[34px] rounded-[30px]">
                        {item?.featuredImage && (
                          <div className="icon mb-[20px]">
                            <Images
                              imageurl={item?.featuredImage?.node?.sourceUrl}
                              quality={100}
                              width={"12"}
                              height={"12"}
                              alt="test"
                              placeholder={true}
                              classes={"block h-[12px]"}
                            />
                          </div>
                        )}
                        <p dangerouslySetInnerHTML={{ __html: item.title }} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-6 " ref={section6}>
          <div className="container">
            <h3 className="heading-2 text-center sm:mb-[70px] mb-[30px]">
              {pageData.aboutUs.videoHeading && pageData.aboutUs.videoHeading}
            </h3>
            <div className="mx-auto lg:max-w-[80%]">
              <VideosSlider data={_videosData} />
            </div>
          </div>
        </section>

        <section className="section-7" ref={section7}>
          <div className="container">
            <h3 className="heading-2 text-center mb-[20px]">
              {pageData.aboutUs.deliveryMethodHeading &&
                pageData.aboutUs.deliveryMethodHeading}
            </h3>

            <div
              className="sm:mb-[70px] mb-[30px]"
              dangerouslySetInnerHTML={{
                __html:
                  pageData.aboutUs.deliveryMethodDescription &&
                  pageData.aboutUs.deliveryMethodDescription,
              }}
            />

            <div className="mx-auto lg:max-w-[80%]">
              <TimelineDelivery data={_deliveryMethod} />
            </div>
          </div>
        </section>

        <section
          className="relative grid items-center section-8 pt-0 lg:pb-[15vh] pb-[50px]"
          ref={section8}>
          <div className="container">
            <div className="mx-auto lg:max-w-[80%]">
              <h3 className="heading-2 text-center mb-[70px]">
                {pageData.aboutUs.teamHeading && pageData.aboutUs.teamHeading}
              </h3>
              <div className="grid sm:gap-[100px] gap-[80px]">
                {_teamsData &&
                  _teamsData.map((team, key) => {
                    const columnOrder = key % 2 !== 0; // Check if the index is odd
                    return (
                      <div
                        key={key}
                        className="card sm:p-[60px] p-[40px] rounded-[30px]">
                        {team.featuredImage && (
                          <Images
                            imageurl={
                              team.featuredImage.node.sourceUrl &&
                              team.featuredImage.node.sourceUrl
                            }
                            styles={""}
                            quality={80}
                            width={"150"}
                            height={"150"}
                            alt={
                              team.featuredImage.node.altText &&
                              team.featuredImage.node.altText
                            }
                            placeholder={true}
                            classes={
                              "block size-[100px] rounded-full object-cover mb-[30px] grayscale-[0.6] opacity-[0.8]"
                            }
                          />
                        )}
                        <div className={`flex-1`}>
                          <h2 className="sub-heading mb-[8px]">{team.title}</h2>
                          <p className="mb-[20px]">{team.teamAcf.position}</p>
                          <div
                            dangerouslySetInnerHTML={{ __html: team.content }}
                          />

                          <div className="marquee mt-[30px]">
                            <div className="marquee-content gap-[10px]">
                              {team.teamAcf.intrested
                                .split("/")
                                .map((item, key) => {
                                  return (
                                    <div
                                      className="bg-[#8989890f] border-[#f9fafb1a] rounded-full py-[10px] px-[15px] whitespace-nowrap"
                                      key={key}>
                                      {item}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    //ABOUT PAGE DATA
    const aboutData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
  pages(where: {id: 798}) {
    nodes {
      title
      pages{
        heroBanner{
          node{
            altText
            sourceUrl
          }
        }
        heroVideo
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
      pages {
        subHeading
      }
      seoKeywords {
        seoKeywords
      }
      aboutUs {
        aboutDescription1
        aboutDescription2
        journeyHeading
        timeline
        approchHeading
        approachContent
        approchBanner {
          node {
            sourceUrl
            altText
          }
        }
        aboutBottomHeading
        aboutBottomDescription
        marketingStrategy {
          node {
            altText
            sourceUrl
          }
        }
        coreValuesHeading
        coreValuesDescription
        deliveryMethodHeading
        deliveryMethodDescription
        teamHeading
        videoHeading
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
    const aboutPageData = await aboutData.json();

    //CORE VALUES DATA
    const coreValues = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
          allCoreValues{
           nodes{
             title
             content
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
    const coreValuesData = await coreValues.json();

    //DELIVERY METHOD DATA
    const deliveryMethod = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `   query Posts {
              allDeliveryMethod(where: {orderby: {order: DESC, field: NAME_IN}}) {
               nodes{
                 title
                 content
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
    const deliveryMethodData = await deliveryMethod.json();

    //TEAMS DATA
    const teams = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
              teams(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                 teamAcf{
                  position
                  intrested
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
    const teamsData = await teams.json();

    //TIMELINE DATA
    const timline = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
              allTimeLine(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
               timeLineAcf{
                website
                year
                soon
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
    const timelineData = await timline.json();

    //VIDEOS DATA
    const videos = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
  allVideos {
    nodes {
      videosAcf {
        link
      }
      title
      featuredImage {
        node {
          altText
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
    const videosData = await videos.json();

    return {
      props: {
        aboutPageData,
        coreValuesData,
        deliveryMethodData,
        teamsData,
        timelineData,
        videosData,
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        aboutPageData: {},
        coreValuesData: {},
        deliveryMethodData: {},
        teamsData: {},
        timelineData: {},
        videosData: {},
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}
