import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useThemeContext } from "@/context/themeContext";

export default function Timeline(data) {
  const { theme } = useThemeContext();

  const timelineData = data.data;

  const timeline = useRef();

  useGSAP(
    () => {
      const list = gsap.utils.toArray(".timeline ul li .content");

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          opacity: 0,
         
        });
      });

      gsap.to(list, {
        opacity: 1,
        
        scrollTrigger: {
          trigger: list,
          start: "top 60%",
          end: "bottom center",
          scrub: 1,
          //  markers:true,
        },
      });
    },
    { scope: timeline }
  );

  return (
    <>
      <div className="timeline realtive" ref={timeline}>
        <ul className="outer">
          {timelineData &&
            timelineData.map((item, key) => {
              const isSoon = item.timeLineAcf.soon === true;
              const isOddItem = key % 2 !== 0; // Check if the index is odd

              return (
                <li className={`${isSoon ? "soon" : ""} card-`} key={key}>
                  <div className={`sm:p-20 p-5 relative z-10`}>
                    {isSoon && (
                      <span
                        className={`${
                          theme === "dark"
                            ? "border-[#fff] text-[#13589c] bg-[#fff]"
                            : "border text-black bg-white"
                        } year text-[#13589c] bg-[#fff] border-[2px] ${
                          isOddItem ? " !right-[-57px] !left-auto" : ""
                        }`}>
                        {item.timeLineAcf.year}
                      </span>
                    )}
                    {!isSoon && (
                      <span
                        className={`${
                          theme === "dark"
                            ? "border-[#fff] text-[#13589c] bg-[#fff]"
                            : "border border-black text-black bg-white"
                        } year text-[#13589c] bg-[#fff] border-[2px] ${
                          isOddItem ? " !right-[-57px] !left-auto" : ""
                        }`}>
                        {item.timeLineAcf.year}
                      </span>
                    )}
                    <div className="content">
                      <h3
                        className={`${
                          isSoon ? "" : ""
                        } title sub-heading mb-3`}>
                        {item.title}
                      </h3>
                      <p
                        className={`${
                          isSoon ? "" : ""
                        } md:text-[1.125rem] text-[1rem]`}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      <div className="mt-[20px]">
                        {item.timeLineAcf.website && (
                          <Link
                            title={`Visit website ${item.timeLineAcf.website}`}
                            target="_blank"
                            aria-label="Website"
                            href={item.timeLineAcf.website}
                            className="btn btn-small inline-block">
                            Website
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
