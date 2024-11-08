import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useThemeContext } from "@/context/themeContext";

export default function TimelineDelivery(data) {
  const { theme } = useThemeContext();
  const timelineData = data.data;

  const timeline = useRef();

  useGSAP(
    () => {
      const section = document.querySelector(".timeline");
      const list = gsap.utils.toArray(".timeline ul li .content");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          opacity: 0,
        
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
        opacity: 1,
       
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
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
              const isOddItem = key % 2 !== 0; // Check if the index is odd

              return (
                <li className={`card-`} key={key}>
                  <div className={`sm:p-20 p-5 relative z-10`}>
                    <span
                      className={`${
                        theme === "dark"
                          ? "border-[#fff] text-[#13589c] bg-[#fff]"
                          : "border border-black text-black bg-white"
                      } year text-[#13589c] bg-[#fff] border-[2px] ${
                        isOddItem ? " !right-[-57px] !left-auto" : ""
                      }`}>
                      {key + 1}
                    </span>

                    <div className="content">
                      <h3 className={`title sub-heading mb-3 capitalize`}>
                        {item.title}
                      </h3>
                      <p
                        className={`md:text-[1.125rem] text-[1rem]`}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
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
