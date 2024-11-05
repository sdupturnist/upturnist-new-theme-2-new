
import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import Package from "@/components/Package";
import ComparePackages from "@/components/PackageCompare";
import PageHeading from "@/components/PageHeading";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react";
import Images from "@/components/Images";
import ReadMore from "@/components/ReadMore";


export default function Packages({ packagesPageData, allPackagesData }) {


  const pageData = packagesPageData.data.pages.nodes[0]

  const packageData = allPackagesData.data.packages.nodes


  const section1 = useRef();
  const section2 = useRef();



  useGSAP(() => {
    const section = document.querySelector('.section-1');

    gsap.set(section, { opacity: 0.2 });

    gsap.to(section, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onEnterBack: () => gsap.to(section, { opacity: 1 }),
      },
    });


  }, { scope: section1 });





  useGSAP(() => {
    const section = document.querySelector('.section-2');
    const list = gsap.utils.toArray('.section-2 ul li');


    gsap.set(section, { opacity: 0.3 });


    // Set different initial rotation angles for each list item
    list.forEach((item, index) => {
      gsap.set(item, {
        filter: 'blur(5px)',
        y: 100 + index * 50, // Each item moves down by 50px incrementally

      });
    });

    gsap.to(section, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onEnterBack: () => gsap.to(section, { opacity: 1 }),
      },
    });

    gsap.to(list, {
      y: 0,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: list,
        start: 'top 80%',
        end: 'bottom center',
        scrub: 1,
      },
    });




  }, { scope: section2 });



  const [isExpanded, setIsExpanded] = useState(false);
  const packageRef = useRef(null);

  const handleShowMorePackage = () => {
    setIsExpanded(!isExpanded);
    if (packageRef.current) {
      packageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };






  return (
    <>
      <Metatags data={packagesPageData} />
      <Layout>
        <AOSInit />


        <PageHeading heading={pageData.title && pageData.title} subHeading={pageData.pages.subHeading && pageData.pages.subHeading} />


        <section className="section-1 flex items-center text-center p-0 relative" ref={section1}>
          <div className="container mx-auto items-center grid">
            <div
              ref={packageRef}
              className='grid grid-cols-1 lg:grid-cols-3 gap-[30px] package-wrpr-'>
              {packageData && packageData.map((item, key) => (
                <div key={key}>
                  <Package
                    title={item.title}
                    packages={item.packages}
                    content={item.content}
                    viewMore={`${isExpanded ? 'max-h-[auto] view-full' : 'max-h-[250px] view-less'}`}
                  />
                </div>
              ))}


            </div>
            <div className="bottom-expand">
              <span className="line-1"></span>
              <button
                className="btn btn-small relative z-1 whitespace-nowrap"
                onClick={handleShowMorePackage}>
                {isExpanded ? 'View less' : 'View more features'}
              </button>
              <span className="line-2"></span>
            </div>
            <ComparePackages data={packageData} />
          </div>
        </section>

        <section className="relative grid items-center section-2 overflow-hidden" ref={section2} >
            <div className="container">

              <ul className="grid lg:flex-row sm:gap-[100px] gap-[30px]">

        {packageData && packageData.map((item, key) => {

          const sectionOrder = key % 2 !== 0;

          return  (
          <li key={key} className="lg:flex grid flex-col items-center lg:flex-row sm:gap-[100px] gap-[30px]">
              <div className={`${sectionOrder == 1 ? 'order-1' : null} image-box- mx-auto`} key={key}>
                <div className="line"></div>
                <Images
                  imageurl={item.featuredImage.node.sourceUrl && item.featuredImage.node.sourceUrl}
                  styles={''}
                  quality={80}
                  width={'600'}
                  height={'550'}
                  alt={item.featuredImage.node.altText && item.featuredImage.node.altText}
                  placeholder={true}
                  classes={'block w-full'}
                />
              </div>
              <div className="flex-1">
                <h2 className="heading-3 mb-[20px]">
                  {item.title}
                </h2>
                <div className="grid gap-[16px]">
                  <ReadMore maxLength={500}>
                    {item.packages.description}
                  </ReadMore>
                </div>
                <div>
                </div>
              </div>
             </li>
             )
        })}
        </ul>
            </div>
          </section>


      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  try {

    //PAGE DATA
    const pageData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        pages(where: {id:3896}) {
          nodes{
            title
            content
             pages{
                subHeading
              }
                   seoKeywords{
          seoKeywords
        }
            featuredImage{
            node{
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
      next: { revalidate: 10 },
    },
      {
        cache: 'force-cache',
        cache: 'no-store'
      }
    );
    const packagesPageData = await pageData.json();



    //PAGE DATA
    const packagesData = await fetch(
      wordpressGraphQlApiUrl, {
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
        cache: 'force-cache',
        cache: 'no-store'
      }
    );
    const allPackagesData = await packagesData.json();


    return {
      props: {
        packagesPageData,
        allPackagesData
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        packagesPageData: {},
        allPackagesData: {},
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}

