import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from "@/components/Aos";
import MetatagsServiceSingle from "@/components/SeoServiceSingle";
import {  useState } from "react";
import { useRouter } from "next/router";
import { HeroContent } from "@/utils/DynamicComponents";
import ReadMore from "@/components/ReadMore";
import Images from "@/components/Images";
import { useRef } from "react";
import Package from "@/components/Package";
import ComparePackages from "@/components/PackageCompare";
import { useThemeContext } from "@/context/themeContext";


export default function Service({ servicePageData, allPackagesData }) {
  const router = useRouter();

  const {theme} = useThemeContext()

  // Destructure data from servicePageData
  const pageData = servicePageData?.data?.pages?.nodes[0];
  const packageData = allPackagesData.data.packages.nodes;
  const serviceData =
    servicePageData?.data?.pages?.nodes[0]?.mainContentRepeaterFields;

  const content = pageData?.content;

  

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
          <div className="service-single overflow-hidden">
            <section className="hero-home bg-box flex items-center text-center !pb-0">
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
                className="relative grid items-center section-2 pt-[50px] xl:pb-[15vh] pb-[50px]"
              >
                <div
                  className="container grid sm:gap-[100px] gap-[50px] list-items"
                >
                  {servicePageData &&
                    serviceData &&
                    serviceData.map((item, key) => {
                      const columnOrder = key % 2 !== 0; // Check if the index is odd
                      return (
                        <div
                          key={key}
                          className="card card-lg item card-effect sm:p-[80px] p-[40px] rounded-[30px] flex flex-col items-center xl:flex-row sm:gap-[100px] gap-[30px]">
                          <div className="flex-1 xl:order-1 order-2">
                            {key === 0 ? (
                              <h1 className="heading-3 mb-[20px]">
                                {item?.title}
                              </h1>
                            ) : (
                              <h2 className="heading-3 mb-[20px]">
                                {item?.title}
                              </h2>
                            )}
                          
                            <ReadMore maxLength={500}>
                              {item?.description}
                            </ReadMore>
                            <div></div>
                          </div>
                          {item?.image_url && (
                            <div
                              className={`${
                                columnOrder ? "xl:order-2 order-1" : ""
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
                className="section-1 flex items-center text-center relative pt-0 xl:pb-[15vh] pb-[50px]"
               >
                <div className="container mx-auto items-center">
                  <h2 className="heading-2 mb-[30px] sm:mb-[70px]">
                    Our Digital Marketing Packages{" "}
                  </h2>
                  <div
                 
                    className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] package-wrpr-">
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
                  <div className="bottom-expand ">
                    <span className="line-1"></span>
                    <button
                      className="btn btn-small relative z-1 whitespace-nowrap"
                      onClick={handleShowMorePackage}>
                      {isExpanded ? "View less" : "View more features"}
                    </button>
                    <span className="line-2"></span>
                  </div>
                 <div className="mt-[70px]">
                 <ComparePackages data={packageData} />
                 </div>
                </div>
              </section>
            )}

            {content && (
              <section
                className="relative grid items-center section-3 content-service pt-0 xl:pb-[15vh] pb-[50px]"
              >
                <div className="container">
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
