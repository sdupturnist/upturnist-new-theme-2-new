import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from "@/components/Aos";
import BlurAnimation from "@/components/BlurAnimation";
import EnquiryService from "@/components/EnquiryService";
import MetatagsServiceSingle from "@/components/SeoServiceSingle";
import AnimatedTextCharacter from "@/components/AnimatedText";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeroContent } from "@/utils/DynamicComponents";
import ReadMore from "@/components/ReadMore";
import Images from "@/components/Images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Package from "@/components/Package";
import ComparePackages from "@/components/PackageCompare";

export default function Service({ servicePageData, allPackagesData }) {
  const router = useRouter();

  // Destructure data from servicePageData
  const pageData = servicePageData?.data?.pages?.nodes[0];
  const packageData = allPackagesData.data.packages.nodes;
  const serviceData =
    servicePageData?.data?.pages?.nodes[0]?.mainContentRepeaterFields;

  const content = pageData?.content;

  //console.log(servicePageData?.data?.pages?.nodes[0]?.additionalServicesRepeaterFields)

  const serviceList = useRef();
  const additionalServiceList = useRef();

  //console.log(pageData?.content)

  useGSAP(
    () => {
      const section = document.querySelector(".section-2");
      const list = gsap.utils.toArray(".section-2 .list-items .item"); // Adjusted selector

      gsap.set(section, {
        opacity: 1,
      });

      // Set initial styles for the first list item (no animation)
      gsap.set(list[0], {
        opacity: 1,
        x: 0, // No movement for the first item
        y: 0,
      });

      // Set initial styles for the rest of the list items
      list.slice(1).forEach((item, index) => {
        gsap.set(item, {
          opacity: 0.1,
          x: index % 2 === 0 ? -1000 : 1000, // Even items from left, odd from right
          y: 0,
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

      gsap.to(list.slice(1), {
        opacity: 1,
        x: 0, // Animate the rest to original position
        stagger: 0.1, // Stagger the animation by 0.1 seconds for each item
        scrollTrigger: {
          trigger: section, // Triggering the section
          start: "top",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: serviceList }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-3");
      const list = gsap.utils.toArray(".section-3 .service-list .item");
      const heading = document.querySelector(".section-3 .heading-2");

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          // rotation: index % 2 === 0 ? -10 : 10,
          y: 300 + index * 50, // Each item moves down by 50px incrementally
        });
      });

      // Sequential animation for list items
      gsap.to(list, {
        //  rotation: 0,
        y: 0,
        stagger: 0.1, // Delay between each item animation
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          //markers: true,
        },
      });

      gsap.set(heading, {
        opacity: 0.5,
      });

      gsap.to(heading, {
        opacity: 1,
        scrollTrigger: {
          trigger: list,
          start: "top 90%",
          end: "bottom 70%",
          scrub: 1,
          onEnterBack: () => gsap.to(heading, { position: "relative" }),
        },
      });
    },
    { scope: additionalServiceList }
  );

  const section1 = useRef();
  const section2 = useRef();

  useGSAP(
    () => {
      const section = document.querySelector(".section-1");

      gsap.set(section, { opacity: 0.2 });

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
    { scope: section1 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-2");
      const list = gsap.utils.toArray(".section-2 ul li");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          filter: "blur(5px)",
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
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: section2 }
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const packageRef = useRef(null);

  const handleShowMorePackage = () => {
    setIsExpanded(!isExpanded);
    if (packageRef.current) {
      packageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {pageData && <MetatagsServiceSingle data={servicePageData} />}
      {pageData && (
        <Layout>
          <AOSInit />
          <div className="service-single">
            <section className="hero-home bg-box flex items-center text-center pb-0">
              <div className="container mx-auto">
                <div className="grid gap-[30px]">
                  <HeroContent
                    title={pageData && pageData.title}
                    animatedHeading={pageData && pageData.subHeading}
                    desc={pageData.pages.subHeading}
                  />
                </div>
              </div>
            </section>

            {servicePageData && (
              <section
                className="relative grid items-center section-2 pt-[50px]"
                data-aos-delay="1000"
                data-aos="fade-up">
                <div
                  className="container grid sm:gap-[100px] gap-[50px] list-items"
                  ref={serviceList}>
                  {servicePageData &&
                    serviceData &&
                    serviceData.map((item, key) => {
                      const columnOrder = key % 2 !== 0; // Check if the index is odd
                      return (
                        <div
                          key={key}
                          className="card card-lg item card-effect sm:p-[80px] p-[40px] rounded-[30px] flex flex-col items-center lg:flex-row sm:gap-[100px] gap-[30px]">
                          <div className="flex-1 lg:order-1 order-2">
                            {key === 0 ? (
                              <h1 className="heading-2 mb-[20px]">
                                {item?.title}
                              </h1>
                            ) : (
                              <h2 className="heading-2 mb-[20px]">
                                {item?.title}
                              </h2>
                            )}
                            {console.log(item?.description)}
                            <ReadMore maxLength={500}>
                              {item?.description}
                            </ReadMore>
                            <div></div>
                          </div>
                          {item?.image_url && (
                            <div
                              className={`${
                                columnOrder ? "lg:order-2 order-1" : ""
                              } image-box- mx-auto`}>
                              <div className="line"></div>
                              <Images
                                imageurl={item?.image_url}
                                styles={""}
                                quality={80}
                                width={"600"}
                                height={"550"}
                                alt={item?.title}
                                placeholder={true}
                                classes={"block w-full"}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* PACKAGES */}

            {router.query.service[0] === "digital-marketing-uae" && (
              <section
                className="section-1 flex items-center text-center relative pt-0"
                ref={section1}>
                <div className="container mx-auto items-center">
                  <h2 className="heading-2 mb-[30px] sm:mb-[70px]">
                    Our Digital Marketing Packages{" "}
                  </h2>
                  <div
                    ref={packageRef}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] package-wrpr-">
                    {packageData &&
                      packageData.map((item, key) => (
                        <div key={key}>
                          <Package
                            title={item.title}
                            packages={item.packages}
                            content={item.content}
                            viewMore={`${
                              isExpanded
                                ? "max-h-[auto] view-full"
                                : "max-h-[250px] view-less"
                            }`}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="bottom-expand">
                    <span className="line-1"></span>
                    <button
                      className="btn btn-small relative z-1 whitespace-nowrap"
                      onClick={handleShowMorePackage}>
                      {isExpanded ? "View less" : "View more features"}
                    </button>
                    <span className="line-2"></span>
                  </div>
                  <ComparePackages data={packageData} />
                </div>
              </section>
            )}

            {content && (
              <section
                className="relative grid items-center section-3 content-service pt-0"
                data-aos-delay="1000"
                data-aos="fade-up">
                <div className="container" ref={additionalServiceList}>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </section>
            )}
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getStaticPaths() {
  async function fetchServices() {
    try {
      const res = await fetch(wordpressGraphQlApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
              query {
                pages {
                  nodes {
                    name
                  }
                }
              }
            `,
        }),
        cache: "no-store",
      });

      const data = await res.json();
      return data?.data?.pages?.nodes ?? []; // Return an empty array if nodes are undefined
    } catch (error) {
      console.error("Error fetching services:", error);
      return []; // Return an empty array in case of error
    }
  }

  // Fetch services and create paths
  const services = await fetchServices();

  // Ensure services is defined and not null
  const paths =
    services.length > 0
      ? services.map((service) => ({
          params: { service: service.name },
        }))
      : [];

  return {
    paths,
    fallback: "blocking", // or 'false' depending on your needs
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { service } = params;

  try {
    const serviceData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query {
              pages(where: {name: "${service}"}) {
                nodes {
                  title
                  content
                       mainContentRepeaterFields {
        title
        description
        image_id
        image_url
    }
          additionalServicesRepeaterFields{
             title
        description
      title
      description
      image_id
      image_url
      }
                  pages {
                  headingAdditionlaServices
                    subHeading
                    faqheadingcommon
                    faqCommon
                  }
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
            }
          `,
      }),
      cache: "no-store",
    });

    const servicePageData = await serviceData.json();

    // Check if servicePageData or the specific page data is missing
    const pageData = servicePageData?.data?.pages?.nodes[0];

    if (!pageData) {
      return {
        notFound: true, // Trigger 404 page
      };
    }

    const packagesData = await fetch(
      wordpressGraphQlApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Posts{
       packages( where: {orderby: {order: DESC, field: NAME_IN}}){
        nodes{
          title
          content
          featuredImage{
            node{
              altText
              sourceUrl
            }
          }
          packages{
          description
            features
            price
            subHeading
          
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
    const allPackagesData = await packagesData.json();

    return {
      props: {
        servicePageData,
        allPackagesData,
        test: "test",
      },
      revalidate: 10, // Enable Incremental Static Regeneration
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true, // Trigger 404 page on error
    };
  }
}