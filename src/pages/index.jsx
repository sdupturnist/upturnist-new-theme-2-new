import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from "@/components/Seo";
import { AOSInit } from "@/components/Aos";
import Images from "@/components/Images";
import { useModalContext } from "@/context/modalContext";
import Accordion from "@/components/Accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Button from "@/components/Buttons";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import {
  PortfolioSlider,
  HeroContent,
  TestimonialSlider,
} from "@/utils/DynamicComponents";
import ReadMore from "@/components/ReadMore";
import Link from "next/link";
import VideoPreview from "@/components/VideoPreview";
import { useSiteContext } from "@/context/siteContext";
import { useThemeContext } from "@/context/themeContext";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ReactPlayer from "react-player";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home({
  homePageData,
  moreServicesDatas,
  whoWeAreDatas,
  worksData,
  testimonialData,
  serviceListHomeData_,
  videosData,
}) {
  const { setModalFor, setShowModal } = useModalContext();
  const { homeMeues1, homeMeues2 } = useSiteContext();
  const { theme } = useThemeContext();

  const pageData = homePageData.data.pages.nodes[0].homePage;
  const _moreServicesData = moreServicesDatas.data.moreServices.nodes;
  const _whoWeAreDatas = whoWeAreDatas.data.allWhoWeAre.nodes;
  //const _works = worksData.data.works.nodes
  const _testimonial = testimonialData.data.testimonials.nodes;
  const _servicesHome = serviceListHomeData_.data.allServiceListHome.nodes;
  const _videosData = videosData?.data?.allVideos?.nodes[0];

  const hero = useRef();
  const section1 = useRef();
  const section2_1 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();
  const section9 = useRef();
  const section10 = useRef();
  const section11 = useRef();
  const section12 = useRef();
  const section13 = useRef();
  const section14 = useRef();
  const sectionservices1 = useRef();
  const sectionservices2 = useRef();

  useGSAP(
    () => {
      const section = document.querySelector(".hero-home");

      gsap.set(section, {
       // opacity: 1,
        y: 0,
      });

      gsap.to(section, {
       // opacity: 0,
        y: 0,
        scrollTrigger: {
          trigger: section,
          start: "bottom 10%",
          end: "top",
          scrub: 1,
          // markers: true,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });
    },
    { scope: hero }
  );

  useGSAP(
    () => {
      // const section = document.querySelector(".section-1");
      const img = document.querySelector(".section-1 .image-box-");

      //  gsap.set(section, { opacity: 0.2 });

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

      gsap.set(img, { opacity: 0, rotate: 10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });

      // Stagger the animations for each box
    },
    { scope: section1 }
  );

  useGSAP(
    () => {
      const heading1 = document.querySelector(".section-2 .heading1");
      const heading3 = document.querySelector(".section-2 .heading3");
      const heading4 = document.querySelector(".section-2 .heading4");

      // Set initial states
      gsap.set(heading1, { opacity: 0, x: 1000 });
      gsap.set(heading3, { opacity: 0, x: -1000 });
      gsap.set(heading4, { y: 100, rotate: 0, opacity: 0.1, scale: 1 });

      // Animate heading1
      gsap.to(heading1, {
        opacity: 1,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: heading1,
          start: "top 80%", // Start the animation when heading1 reaches 80% of the viewport
          end: "bottom 30%", // End when heading1 is out of view
          scrub: true, // Smooth scroll synchronization
          //  markers: true,  // Remove or set to false in production
        },
      });

      gsap.to(heading3, {
        opacity: 1,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: heading3,
          start: "top 80%", // Start the animation when heading3 reaches 80% of the viewport
          end: "bottom 30%", // End when heading3 is out of view
          scrub: true,
          //  markers: true,  // Remove or set to false in production
        },
      });

      // Animate heading4
      gsap.to(heading4, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading4, // Trigger for heading4
          start: "top 100%", // Start the animation when heading4 reaches 80% of the viewport
          end: "bottom 50%", // End when heading4 is out of view
          scrub: true, // Smooth scroll synchronization
          // markers: true,  // Remove or set to false in production
        },
      });
    },
    { scope: section2_1 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-3");
      const img = document.querySelector(".section-3 .image-box-");

      //   gsap.set(section, { opacity: 0.2 });

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

      gsap.set(img, { opacity: 0, rotate: 10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });

      // Stagger the animations for each box
    },
    { scope: section3 }
  );

  useGSAP(
    () => {
      // const section = document.querySelector(".section-4");
      const img = document.querySelector(".section-4 .image-box-");

      //   gsap.set(section, { opacity: 0.2 });

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

      gsap.set(img, { opacity: 0, rotate: -10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });

      // Stagger the animations for each box
    },
    { scope: section4 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-5");
      const img = document.querySelector(".section-5 .image-box-");

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

      gsap.set(img, { opacity: 0, rotate: 10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });
      // Stagger the animations for each box
    },
    { scope: section5 }
  );

  useGSAP(
    () => {
      const list = gsap.utils.toArray(".section-6 ul li");
      const heading = document.querySelector(".section-6 .heading-2");

      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });

      gsap.to(list, {
        rotation: 0,
        y: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      // gsap.set(heading, {
      //   position: "relative",
      //   y: 0,
      //   // filter: 'blur(5px)',
      // });

      gsap.to(heading, {
        position: "sticky",
        //filter: "blur(0px)",
        y: "30%",
        scrollTrigger: {
          trigger: list,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });
    },
    { scope: section6 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-7");
      const cardIntroVideo = document.querySelector(
        ".section-7 .card-about-video"
      );

      //   gsap.set(section, { opacity: 0.3 });
      gsap.set(cardIntroVideo, {
        rotation: 0,
        top: 0,
      });

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

      gsap.to(cardIntroVideo, {
        rotation: -10,
        top: -150,
        scrollTrigger: {
          trigger: cardIntroVideo,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          //onEnterBack: () => gsap.to(cardIntroVideo, { }),
        },
      });
    },
    { scope: section7 }
  );

  useGSAP(
    () => {
      //   const section = document.querySelector(".section-8");
      const list = gsap.utils.toArray(".section-8 .col-wrpr li");

      //  gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });

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

      gsap.to(list, {
        rotation: 0,
        y: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });
    },
    { scope: section8 }
  );

  useGSAP(
    () => {
      //const section = document.querySelector(".section-9");
      const img = document.querySelector(".section-9 .image-box-");

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

      gsap.set(img, { opacity: 0, rotate: 10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });
      // Stagger the animations for each box
    },
    { scope: section9 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-10");
      const list = gsap.utils.toArray(".section-10 ul li");
      const heading = document.querySelector(".section-10 .heading-wrpr");

      //   gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });

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

      gsap.to(list, {
        rotation: 0,
        y: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.set(heading, {
        position: "relative",
        y: 0,
        // filter: 'blur(5px)',
      });

      gsap.to(heading, {
        position: "sticky",
        //filter: "blur(0px)",
        y: "30%",
        scrollTrigger: {
          trigger: list,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });
    },
    { scope: section10 }
  );

  useGSAP(
    () => {
      //     const section = document.querySelector(".section-11");
      const img = document.querySelector(".section-11 .image-box-");

      //  gsap.set(section, { opacity: 0.2 });

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

      gsap.set(img, { opacity: 0, rotate: -10 });

      gsap.to(img, {
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "end",
          scrub: 1,

          onEnterBack: () => gsap.to(img, { opacity: 1 }),
        },
      });

      // Stagger the animations for each box
    },
    { scope: section11 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-12");
      const workWrpr = document.querySelector(".section-12 .work-wrpr");

      //  gsap.set(section, { opacity: 0.3 });

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

      gsap.set(workWrpr, {
        opacity: 0.3,
        //filter: "blur(5px)",
        filter: "grayscale(1)",
      });

      gsap.to(workWrpr, {
        opacity: 1,
        //filter: "blur(0px)",
        filter: "grayscale(0)",
        scrollTrigger: {
          trigger: workWrpr,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: section12 }
  );

  useGSAP(
    () => {
      //  const section = document.querySelector(".section-13");
      const faqWrpr = document.querySelector(".section-13 .faq-wrpr");

      //   gsap.set(section, { opacity: 0.3 });

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

     // gsap.set(faqWrpr, { opacity: 0.3 });

      gsap.to(faqWrpr, {
        opacity: 1,
        scrollTrigger: {
          trigger: faqWrpr,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: section13 }
  );

  useGSAP(
    () => {
      //   const section = document.querySelector(".section-14");
      const reviewWrpr = document.querySelector(".section-14 .reviews-wrpr");



      gsap.to(reviewWrpr, {
        opacity: 1,
        //filter: "blur(0px)",
        // filter: "grayscale(0)",
        scrollTrigger: {
          trigger: reviewWrpr,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: section14 }
  );

  useGSAP(
    () => {
      // const section = document.querySelector(".section-services-1");
      const list = gsap.utils.toArray(".section-services-1 ul li");
      const heading = document.querySelector(".section-services-1 .heading-2");

      //   gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          // filter: "blur(5px)",
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });

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

      gsap.to(list, {
        rotation: 0,
        y: 0,
        // filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      // gsap.set(heading, {
      //   //  filter: "blur(5px)",
      //   opacity: 0.5,
      //   // filter: 'blur(5px)',
      // });

      gsap.to(heading, {
        // filter: "blur(0px)",
        opacity: 1,
        scrollTrigger: {
          trigger: list,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
          // markers:true,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });
    },
    { scope: sectionservices1 }
  );

  useGSAP(
    () => {
      // const section = document.querySelector(".section-services-2");
      const list = gsap.utils.toArray(".section-services-2 ul li");
      const heading = document.querySelector(".section-services-2 .heading-2");

      //  gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
          rotation: index % 2 === 0 ? -10 : 10,
          y: 100 + index * 50, // Each item moves down by 50px incrementally
        });
      });


      gsap.to(list, {
        rotation: 0,
        y: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      // gsap.set(heading, {
      //   //filter: "blur(5px)",
      //   opacity: 0.5,
      //   // filter: 'blur(5px)',
      // });

      gsap.to(heading, {
        //filter: "blur(0px)",
        opacity: 1,
        scrollTrigger: {
          trigger: list,
          start: "top 90%",
          end: "bottom 50%",
          scrub: 1,
          // markers:true,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });
    },
    { scope: sectionservices2 }
  );

  let htmlString =
    pageData.seoVisibilityReportHeading1 &&
    pageData.seoVisibilityReportHeading1;
  // Method: Basic string manipulation
  let strippedHtml = htmlString.replace("<p>", "").replace("</p>", "");

 

  const openDownloadModal = () => {
    setShowModal(true);
    setModalFor("download");
  };

  const openHeroModal = () => {
    setShowModal(true);
    setModalFor("hero");
  };

  const openOfferModal = () => {
    setShowModal(true);
    setModalFor("offer");
  };

  useEffect(() => {
    // Get the video element by its class name
    const video = document.getElementsByClassName("video-player")[0];

    // Function to attempt to play the video
    const playVideo = async () => {
      try {
        if (video) {
          // Set video to muted for autoplay to work in most browsers
          video.muted = true;
          await video.play();
          console.log("Video is playing");
        }
      } catch (error) {
        console.error("Error attempting to play the video:", error);
      }
    };

    // Force play after component mounts
    if (video) {
      playVideo();
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Metatags data={homePageData} />

      <Layout>
        <AOSInit />

        <section
          className={`bg-black lg:text-start rounded-[15px] text-center items-center text-white sm:p-[100px] sm:py-[30px] pt-[50px] px-[50px] mt-[5px] sm:min-h-[80vh] hero-home flex overflow-hidden pb-[60px]`}
          ref={hero}>
          <div
            className={`card- mx-auto z-10 relative`}>
            <div
              className={`lg:max-w-[78%] grid sm:gap-[30px] gap-[14px]`}>
              <HeroContent
                title={pageData && pageData.heroTitle}
                animatedHeading={pageData && pageData.heroAnimatedHeading}
                desc={pageData.heroDescription && pageData.heroDescription}
                modalAction={openHeroModal}
              />
            </div>
          </div>
 <div className="video-wrpr rounded-[15px] overflow-hidden">
              <ReactPlayer
                muted
                playing
                loop
                playsinline
                url={
                  pageData &&
                  homePageData?.data?.pages?.nodes[0]?.pages?.heroVideo
                }
              />
            </div>
        </section>

        <section
          className="relative grid items-center section-1"
          ref={section1}>
          <div className="container">
            <div
              className={`grid sm:gap-[70px] gap-[30px]`}>
              <div
                >
                <h3
                  className="para"
                  dangerouslySetInnerHTML={{
                    __html:
                      pageData.aboutHeadingTop && pageData.aboutHeadingTop,
                  }}
                />
                <h2 className="heading-3 mt-[20px] mb-[10px]">
                  {pageData.aboutHeadingTopTwo && pageData.aboutHeadingTopTwo}
                </h2>

                <div className="grid gap-[16px]">
                <ReadMore inMobile maxLength={50}>
                    {pageData.aboutDescription && pageData.aboutDescription}
                  </ReadMore>
                </div>
              </div>

              <Images
                  imageurl={
                    pageData.aboutDescription &&
                    pageData?.aboutImageLight?.node?.sourceUrl
                  }
                  styles={""}
                  quality={100}
                  width={"1700"}
                  height={"1000"}
                  alt={pageData?.aboutImageDark?.node?.altText || "Upturnist"}
                  placeholder={true}
                  classes={
                    "block w-full rounded-[15px] sm:h-[70vh] object-cover"
                  }
                />
            </div>
          </div>
        </section>

        <section className="section-services-1 " ref={sectionservices1}>
          <div className="container grid sm:gap-[50px] gap-[30px]">
            <h2 className="heading-2 text-center">
              {pageData.homeMenu1 && pageData.homeMenu1}
            </h2>

            <ul className="lg:flex grid gap-[30px] items-start service-list">
              {homeMeues1 &&
                homeMeues1.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className={`${
                        theme === "dark" ? "rounded-[30px]" : "rounded-[16px]"
                      } card p-[40px] w-full min-h-[150px]`}>
                      {item?.acf?.icon && (
                        <div className="icon mb-[20px]">
                          {item?.acf?.icon && (
                            <Images
                              imageurl={item?.acf?.icon?.url || ""}
                              quality={100}
                              width={"12"}
                              height={"12"}
                              alt={item?.acf?.icon?.alt || ""}
                              placeholder={true}
                              classes={"block h-[12px]"}
                            />
                          )}
                        </div>
                      )}

                      <h3 className="text-[23px] mb-[10px] flex items-center gap-[7px]">
                        {item?.title}
                        {item?.acf?.slug && (
                          <Link
                            title={item?.title}
                            href={`${frontendUrl}/${item?.acf?.slug}`}>
                            <ArrowUpRightIcon className="sm:size-[14px] size-[12px] hover:opacity-50 transition-all" />
                          </Link>
                        )}
                      </h3>

                      {item?.acf?.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.acf?.description,
                          }}
                        />
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section className="section-services-2" ref={sectionservices2}>
          <div className="container grid sm:gap-[50px] gap-[30px]">
            <h2 className="heading-2 text-center">
              {pageData.homeMenu2 && pageData.homeMenu2}
            </h2>

            <ul className="lg:flex grid gap-[30px] items-center service-list">
              {homeMeues2 &&
                homeMeues2.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className={`${
                        theme === "dark" ? "rounded-[30px]" : "rounded-[16px]"
                      } card p-[40px] w-full min-h-[150px]`}>
                      {item?.acf?.icon && (
                        <div className="icon mb-[20px]">
                          <Images
                            imageurl={item?.acf?.icon?.url || ""}
                            quality={100}
                            width={"12"}
                            height={"12"}
                            alt={item?.acf?.icon?.alt || ""}
                            placeholder={true}
                            classes={"block h-[12px]"}
                          />
                        </div>
                      )}

                      <h3 className="text-[23px] mb-[10px] flex items-center gap-[7px]">
                        {item?.title}
                        {item?.acf?.slug && (
                          <Link
                            title={item?.title}
                            href={`${frontendUrl}/${item?.acf?.slug}`}>
                            <ArrowUpRightIcon className="sm:size-[14px] size-[12px] hover:opacity-50 transition-all" />
                          </Link>
                        )}
                      </h3>
                      {item?.acf?.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.acf?.description,
                          }}
                        />
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section
          className={`bg-black- rounded-[15px] text-white sm:pb-[100px] pb-[24px] lg:mt-[15vh] mt-[50px] section-2 relative flex items-center text-center overflow-hidden lg:min-h-screen`}
          ref={section2_1}>
          <div className="container lg:block grid sm:gap-[50px] relative z-10">
          <div className="mb-[50px] sm:px-0 px-[30px]">
          <div className="grid gap-[10px] sm:gap-[20px] heading1">
                <h2 className="heading-1">
                  {pageData.aboutCta1 && pageData.aboutCta1}
                </h2>
                <p
                  data-delay="500"
                  className="sm:max-w-[70%] mx-auto text-[14px] sm:text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: pageData.aboutCta1Desc && pageData.aboutCta1Desc,
                  }}
                />
              </div>
            </div>

            <div className="sm:mb-[50px] sm:px-0 px-[30px]">
              <div className="grid gap-[10px] sm:gap-[20px] heading3">
                <h2 className="heading-1">
                  {pageData.aboutCta2 && pageData.aboutCta2}
                </h2>
                <p
                  data-delay="500"
                  className="sm:max-w-[70%] mx-auto text-[14px] sm:text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: pageData.aboutCta2Desc && pageData.aboutCta2Desc,
                  }}
                />
              </div>
            </div>

            <div
              className={`card rounded-[15px] text-white sm:p-[80px] p-[40px]  lg:px-[180px] lg:py-[100px] heading4`}>
              <div className="grid gap-[20px]">
                <h2 className="heading-3">
                  {pageData.aboutCta4 && pageData.aboutCta4}
                </h2>
                <div
                  className="[&>*]:mb-[16px] [&>p:last-child]:mb-0"
                  data-delay="500"
                  dangerouslySetInnerHTML={{
                    __html: pageData.aboutCta4Desc && pageData.aboutCta4Desc,
                  }}
                />
                {/* <p */}
                {/* data-delay="500" */}
                {/* dangerouslySetInnerHTML={{ */}
                {/* __html: */}
                {/* pageData.aboutCta4Desc4_2 && pageData.aboutCta4Desc4_2, */}
                {/* }} */}
                {/* /> */}
                <div className="mt-3 flex items-center">
                  <Button
                    size="normal"
                    label="Let's start"
                    icon={true}
                    classes="mx-auto"
                    action={openHeroModal}
                  />
                </div>
              </div>
            </div>
          </div>
         <BackgroundAnimation />
        </section>

        <section
          className="relative grid items-center section-3"
          ref={section3}>
          <div className="container">
            <div
              className={`grid sm:gap-[70px] gap-[30px]`}>
              <div
               >
                <h3
                  className="para"
                  dangerouslySetInnerHTML={{ __html: strippedHtml }}
                />
                <h2 className="heading-3 mt-[10px] mb-[10px]">
                  {pageData.seoVisibilityReportHeading2 &&
                    pageData.seoVisibilityReportHeading2}
                </h2>

                <div className="grid gap-[16px]">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        pageData.seoVisibilityReportHeadingDescription &&
                        pageData.seoVisibilityReportHeadingDescription,
                    }}
                  />
                  <div className="mt-[10px]">
                    <Button
                      size="normal"
                      label="Let's start"
                      icon={true}
                      action={openOfferModal}
                    />
                  </div>
                </div>
              </div>

              <Images
                  imageurl={
                    pageData.aboutDescription &&
                    pageData?.seoVisibilityReportImageLight?.node?.sourceUrl
                  }
                  styles={""}
                  quality={100}
                  width={"1700"}
                  height={"1000"}
                  alt={
                    pageData?.seoVisibilityReportImageLight?.node?.altText ||
                    "Upturnist"
                  }
                  placeholder={true}
                  classes={
                    "block w-full rounded-[15px] sm:h-[70vh] object-cover"
                  }
                />
            </div>
          </div>
        </section>

        <section
          className="relative grid items-center section-4"
          ref={section4}>
          <div className="container">
            <div
              className={`grid sm:gap-[70px] gap-[30px]`}>
              <div
              >
                <h2 className="heading-3 mt-[0px] mb-[10px]">
                  {pageData.specialzeHeading && pageData.specialzeHeading}
                </h2>

                <div className="grid gap-[16px]">
                <ReadMore inMobile maxLength={40}>
                    {pageData.specialzeDesc && pageData.specialzeDesc}
                  </ReadMore>
                </div>
              </div>

              <Images
                  imageurl={
                    pageData.aboutDescription &&
                    pageData?.specialzeImageLight?.node?.sourceUrl
                  }
                  styles={""}
                  quality={100}
                  width={"1700"}
                  height={"1000"}
                  alt={
                    pageData?.specialzeImageLight?.node?.altText || "Upturnist"
                  }
                  placeholder={true}
                  classes={
                    "block w-full rounded-[15px] sm:h-[70vh] object-cover"
                  }
                />
            </div>
          </div>
        </section>

        <section
          className="relative grid items-center section-5"
          ref={section5}>
          <div className="container">
            <div
              className={`grid sm:gap-[70px] gap-[30px]`}>
              <div
               >
                <h2 className="heading-3 mt-[0px] mb-[10px]">
                  {pageData.services1Heading && pageData.services1Heading}
                </h2>

                <div className="grid gap-[16px]">
                   <ReadMore inMobile maxLength={50}>
                    {pageData.services1Description &&
                      pageData.services1Description}
                  </ReadMore>
                </div>
              </div>

              <Images
                  imageurl={
                    pageData.aboutDescription &&
                    pageData?.services1ImageLight?.node?.sourceUrl
                  }
                  styles={""}
                  quality={100}
                  width={"1700"}
                  height={"1000"}
                  alt={
                    pageData?.services1ImageLight?.node?.altText || "Upturnist"
                  }
                  placeholder={true}
                  classes={
                    "block w-full rounded-[15px] sm:h-[70vh] object-cover"
                  }
                />
            </div>
          </div>
        </section>

        <section
          className={`${theme === 'light' && 'bg-black-'} rounded-[15px] text-white sm:pb-[100px] pb-[24px] lg:mt-[15vh] mt-[50px] relative section-6 overflow-hidden`}
          ref={section6}>
          <div className="container grid gap-[70px] relative z-10">
            {/* <div> */}
            {/* <h3 className="heading-3 text-center"> */}
            {/* {pageData.services2Heading && pageData.services2Heading} */}
            {/* </h3> */}
            {/* </div> */}

            <div>
              <ul
                className={`sm:gap-[50px] gap-[24px] grid md:grid-cols-2 col-wrpr`}>
                {serviceListHomeData_ &&
                  _servicesHome.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className={`${
                          theme === "dark" ? "rounded-[30px]" : "rounded-[16px]"
                        } card card-effect p-[40px]`}>
                        {item?.featuredImage?.node?.sourceUrl && (
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
                        <h3 className="text-[23px] mb-[16px]">
                          {item.title && item.title}
                        </h3>

                        <ReadMore maxLength={30}>
                          {item && item.content}
                        </ReadMore>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <BackgroundAnimation />
       </section>

        <section
          className={`min-h-[80vh] flex items-center section-7 overflow-hidden relative`}
          ref={section7}>
          <div className="container">
            <div
              className={`mx-auto lg:max-w-[80%] w-full  flex flex-col lg:flex-row sm:gap-[50px] gap-[30px]`}>
              {/* {theme === "dark" && (
                <VideoPreview theme="dark" data={_videosData} />
              )} */}
            
                <VideoPreview theme="light" data={_videosData} />
          
              <div className="flex-1 grid gap-[24px] items-center">
                <div className="grid gap-[30px]">
                  <h3
                    className={`sm:text-[2vw] text-[24px]`}>
                    {pageData.downloadHeading && pageData.downloadHeading}
                  </h3>
                  <div>
                    <Button
                      size="normal"
                      label="Download"
                      icon={true}
                      action={openDownloadModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${theme === "dark" && "bg-box"} section-8`}
          ref={section8}>
          <div className="container sm:gap-[70px] gap-[50px] grid">
            <h3 className="heading-3 text-start sm:text-center">
              {pageData.servicesListHeading && pageData.servicesListHeading}
            </h3>
            <ul className="grid md:grid-cols-2 gap-[30px] col-wrpr">
              {_moreServicesData &&
                _moreServicesData.map((service, key) => {
                  return (
                    <li
                      key={key}
                      className={`${
                        theme === "dark" ? "rounded-[30px]" : "rounded-[16px]"
                      } card p-[40px]`}>
                      {service?.featuredImage?.node?.sourceUrl && (
                        <div className="icon mb-[20px]">
                          <Images
                            imageurl={service?.featuredImage?.node?.sourceUrl}
                            quality={100}
                            width={"12"}
                            height={"12"}
                            alt="test"
                            placeholder={true}
                            classes={"block h-[12px]"}
                          />
                        </div>
                      )}
                      {/* <ReadMore  */}
                      {/* classes={`mt-0`}  */}
                      {/* maxLength={50}> */}
                      {/* {service && */}
                      {/* service.content} */}
                      {/* </ReadMore> */}
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: service.content }}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section
          className={`rounded-[15px] text-center bg-black text-white sm:p-[100px] px-[20px] py-[50px] overflow-hidden sm:min-h-[90vh] lg:mt-[15vh] mt-[50px]  relative grid items-center section-9`}
          ref={section9}>
          <div className="container relative z-10">
            <div
              className={`rounded-[15px] text-white flex flex-col items-center lg:flex-row sm:gap-[100px] gap-[30px]`}>
              <div className="flex-1 lg:order-1 order-2">
                <h2 className="heading-3 mb-[20px]">
                  {pageData.about2Heading && pageData.about2Heading}
                </h2>
                <ReadMore btnpos="center" maxLength={65}>
                  {pageData.about2Description && pageData.about2Description}
                </ReadMore>
              </div>
   </div>
          </div>
         
            <div className="video-wrpr">
              <ReactPlayer
                muted
                playing
                loop
                playsinline
                url={
                  pageData &&
                  homePageData?.data?.pages?.nodes[0]?.pages?.heroVideo
                }
              />
            </div>
         
        </section>

        <section className=" relative section-10" ref={section10}>
          <div className="container grid lg:grid-cols-5 lg:gap-[100px] gap-[50px]">
            <div className="lg:col-span-2 lg:sticky top-[50px] z-10 ">
              <div className="heading-wrpr">
                <h3 className="heading-1 top-0 text-center lg:text-start">
                  {pageData.whoWeAreHeading && pageData.whoWeAreHeading}
                </h3>
                <div></div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid md:grid-cols-2 gap-[30px] col-wrpr">
                {_whoWeAreDatas &&
                  _whoWeAreDatas.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className={`${
                          theme === "dark" ? "rounded-[30px]" : "rounded-[16px]"
                        } card p-[30px] `}>
                        {item?.featuredImage?.node?.sourceUrl && (
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
                        <div
                          className="content"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="relative grid items-center section-11"
          ref={section11}>
          <div className="container">
            <div
              className={`grid sm:gap-[70px] gap-[30px]`}>
              <div
              >
                <h2 className="heading-3 mt-[20px] mb-[10px]">
                  {pageData.aboutBottom2 && pageData.aboutBottom2}
                </h2>

                <div className="grid gap-[16px]">
                <ReadMore inMobile maxLength={30}>
                    {pageData.aboutBottom2Content &&
                      pageData.aboutBottom2Content}
                  </ReadMore>
                </div>
              </div>

              <Images
                  imageurl={
                    pageData.aboutDescription &&
                    pageData?.about2PhotoLight?.node?.sourceUrl
                  }
                  styles={""}
                  quality={100}
                  width={"1700"}
                  height={"1000"}
                  alt={pageData?.about2PhotoLight?.node?.altText || "Upturnist"}
                  placeholder={true}
                  classes={
                    "block w-full rounded-[15px] sm:h-[70vh] object-cover"
                  }
                />
            </div>
          </div>
        </section>

        <section
          className={`${theme === "dark" && "bg-box"} section-12 pb-0`}
          ref={section12}>
          <div className="container">
            <h3 className="heading-2 text-center sm:mb-[70px] mb-[30px]">
              {pageData.ourWorksHeading && pageData.ourWorksHeading}
            </h3>
            <div className="work-wrpr">
              <PortfolioSlider data={worksData} />
            </div>
          </div>
        </section>

        <section className="section-13" ref={section13}>
          <div className="container">
            <h3 className="heading-2 text-center sm:mb-[70px] mb-[30px]">
              {pageData && pageData.faqHeading}
            </h3>
            <div className="faq-wrpr">
              {pageData && <Accordion data={pageData && pageData.faq} />}
            </div>
          </div>
        </section>

        <section className="section-14 sm:mb-[100px] mb-[30px]" ref={section14}>
          <div className="container">
            <h3 className="heading-2 text-center sm:mb-[70px] mb-[30px]">
              {pageData.testimonialHeading && pageData.testimonialHeading}
            </h3>
            <div className="reviews-wrpr">
              {_testimonial && <TestimonialSlider data={_testimonial} />}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    //HOME PAGE DATA
    const homeData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Posts {
  pages(where: {title: "home"}) {
    nodes {
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
      seoKeywords {
        seoKeywords
      }
      pages{
        heroVideo
      }
      homePage {
        aboutImageDark{
          node{
            altText
            sourceUrl
          }
        }
           aboutImageLight{
          node{
            altText
            sourceUrl
          }
        }
           seoVisibilityReportImageLight{
          node{
            altText
            sourceUrl
          }
        }
           specialzeImageLight{
          node{
            altText
            sourceUrl
          }
        }
        services1ImageLight{
          node{
            altText
            sourceUrl
          }
        }
           about2PhotoLight{
          node{
            altText
            sourceUrl
          }
        }
        aboutBottom2
        aboutBottom2Content
        aboutBottom2
        aboutBottom2Image {
          node {
            altText
            sourceUrl
          }
        }
        aboutHeadingTop
        aboutHeadingTopTwo
        about2Description
        about2Heading
        about2Photo {
          node {
            altText
            sourceUrl
          }
        }
        
        aboutCta1
        aboutCta1Desc
        aboutCta2
        aboutCta2Desc
        aboutCta4
       aboutCta4Desc
        aboutCta4Desc4_2
        aboutDescription
        aboutDescription2
        aboutHeading
        heroTitle
        services2Description
        heroCtaLabel
        downloadHeading
        downloadHeadingCta
        heroDescription
        heroAnimatedHeading
        heroCtaLabel
        ourWorksHeading
        seoVisibilityReportHeading1
        seoVisibilityReportHeading2
        seoVisibilityReportHeadingCtaLabel
        seoVisibilityReportHeadingDescription
        faqHeading
        faq
        specialzeHeading
        specialzeDesc
        homeMenu1
        homeMenu2
        specialzeImage {
          node {
            sourceUrl
            altText
          }
        }
        seoVisibilityReportImage {
          node {
            altText
            sourceUrl
          }
        }
        seoVisibilityReportVideo
        services1Description
        services1Image {
          node {
            altText
            sourceUrl
          }
        }
        services2Heading
        servicesListHeading
        servicesListHeading2
        testimonialHeading
        whoWeAreHeading
        services1Heading
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
    const homePageData = await homeData.json();

    //MORE SERVICES DATA
    const moreServiceData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
        moreServices{
         nodes{
           title
           content
          featuredImage{
            node{
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
    const moreServicesDatas = await moreServiceData.json();

    //WHO WE ARE DATA
    const whoWeAreData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query Posts {
        allWhoWeAre{
         nodes{
           title
           content
          featuredImage{
            node{
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
    const whoWeAreDatas = await whoWeAreData.json();

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
    const worksData = await workData.json();

    //TESTIMONIAL DATA
    const testimonialsData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Posts {
      testimonials{
       nodes{
         title
         content
        featuredImage{
          node{
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
    const testimonialData = await testimonialsData.json();

    //SERVICES HOME LIST DATA
    const serviceListHomeData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Posts {
  allServiceListHome(where: {orderby: {order: ASC, field: MENU_ORDER}}){
    nodes{
      title
      content
      featuredImage{
        node{
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
    const serviceListHomeData_ = await serviceListHomeData.json();

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
        homePageData,
        moreServicesDatas,
        whoWeAreDatas,
        worksData,
        testimonialData,
        serviceListHomeData_,
        videosData,
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        homePageData: {},
        moreServicesDatas: {},
        whoWeAreDatas: {},
        worksData: {},
        testimonialData: {},
        serviceListHomeData_: {},
        videosData: {},
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}
