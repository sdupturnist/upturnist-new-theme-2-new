import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";



export const hero = useRef();
export const section1 = useRef();
export const section2_1 = useRef();
export const section3 = useRef();
export const section4 = useRef();
export const section5 = useRef();
export const section6 = useRef();
export const section7 = useRef();
export const section8 = useRef();
export const section9 = useRef();
export const section10 = useRef();
export const section11 = useRef();
export const  section12 = useRef();
export const section13 = useRef();
export const section14 = useRef();
export const sectionservices1 = useRef();
export const sectionservices2 = useRef();



useGSAP(
    () => {
      const section = document.querySelector(".hero-home");

      gsap.set(section, {
        opacity: 1,
        y: 0,
      });

      gsap.to(section, {
        opacity: 0,
        y: -1000,
        scrollTrigger: {
          trigger: section,
          start: "bottom 50%",
          end: "top",
          scrub: 1,
          //markers: true,
          onEnterBack: () => gsap.to(section, { opacity: 1 }),
        },
      });
    },
    { scope: hero }
  );

 
  useGSAP(
    () => {
      const section = document.querySelector(".section-1");
      const img = document.querySelector(".section-1 .image-box-");

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
      const section = document.querySelector(".section-2");
      const heading1 = document.querySelector(".section-2 .heading1");
      //  const heading2 = document.querySelector(".section-2 .heading2");
      const heading3 = document.querySelector(".section-2 .heading3");
      const heading4 = document.querySelector(".section-2 .heading4");

      gsap.set(heading1, {
        opacity: 0,
        x: 1000,
        //filter: "blur(5px)",
      });

      // gsap.set(heading2, {
      //   opacity: 0,
      //   x: -1000,
      //   filter: "blur(5px)",
      // });

      gsap.set(heading3, {
        opacity: 0,
        x: 1000,
        //filter: "blur(5px)",
      });

      gsap.set(heading4, {
        opacity: 0,
        //filter: "blur(5px)",
      });

      gsap.to(heading1, {
        opacity: 1,
        x: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: heading1,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          //markers: true,
          onEnterBack: () => gsap.to(heading1, { opacity: 1 }),
        },
      });

      ////

      // gsap.to(heading2, {
      //   opacity: 1,
      //   x: 0,
      //   filter: "blur(0px)",
      //   scrollTrigger: {
      //     trigger: heading2,
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: 1,
      //     //markers: true,
      //     onEnterBack: () => gsap.to(heading2, { opacity: 1 }),
      //   },
      // });

      ////

      gsap.to(heading3, {
        opacity: 1,
        x: 0,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: heading3,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          //markers: true,
          onEnterBack: () => gsap.to(heading3, { opacity: 1 }),
        },
      });

      ////

      gsap.to(heading4, {
        opacity: 1,
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: heading4,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
          // markers: true,
          onEnterBack: () => gsap.to(heading4, { opacity: 1 }),
        },
      });
    },
    { scope: section2_1 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-3");
      const img = document.querySelector(".section-3 .image-box-");

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
      const section = document.querySelector(".section-4");
      const img = document.querySelector(".section-4 .image-box-");

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
      const section = document.querySelector(".section-5");
      const img = document.querySelector(".section-5 .image-box-");

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
      const section = document.querySelector(".section-6");
      const list = gsap.utils.toArray(".section-6 ul li");
      const heading = document.querySelector(".section-6 .heading-2");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
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
        //filter: "blur(0px)",
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
    { scope: section6 }
  );

  useGSAP(
    () => {
      const section = document.querySelector(".section-7");
      const cardIntroVideo = document.querySelector(
        ".section-7 .card-about-video"
      );

      gsap.set(section, { opacity: 0.3 });
      gsap.set(cardIntroVideo, {
        rotation: 0,
        top: 0,
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
      const section = document.querySelector(".section-8");
      const list = gsap.utils.toArray(".section-8 .col-wrpr li");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
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
      const section = document.querySelector(".section-9");
      const img = document.querySelector(".section-9 .image-box-");

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
      const section = document.querySelector(".section-10");
      const list = gsap.utils.toArray(".section-10 ul li");
      const heading = document.querySelector(".section-10 .heading-wrpr");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
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
      const section = document.querySelector(".section-11");
      const img = document.querySelector(".section-11 .image-box-");

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
      const section = document.querySelector(".section-12");
      const workWrpr = document.querySelector(".section-12 .work-wrpr");

      gsap.set(section, { opacity: 0.3 });

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
      const section = document.querySelector(".section-13");
      const faqWrpr = document.querySelector(".section-13 .faq-wrpr");

      gsap.set(section, { opacity: 0.3 });

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

      gsap.set(faqWrpr, { opacity: 0.3, filter: "blur(5px) grayscale(1)" });

      gsap.to(faqWrpr, {
        opacity: 1,
        //filter: "blur(0px)",
        filter: "grayscale(0)",
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
      const section = document.querySelector(".section-14");
      const reviewWrpr = document.querySelector(".section-14 .reviews-wrpr");

      gsap.set(section, { opacity: 0.3 });

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

      gsap.set(reviewWrpr, { opacity: 0.3 });

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
      const section = document.querySelector(".section-services-1");
      const list = gsap.utils.toArray(".section-services-1 ul li");
      const heading = document.querySelector(".section-services-1 .heading-2");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          // filter: "blur(5px)",
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
        // filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      gsap.set(heading, {
        //  filter: "blur(5px)",
        opacity: 0.5,
        // filter: 'blur(5px)',
      });

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
      const section = document.querySelector(".section-services-2");
      const list = gsap.utils.toArray(".section-services-2 ul li");
      const heading = document.querySelector(".section-services-2 .heading-2");

      gsap.set(section, { opacity: 0.3 });

      // Set different initial rotation angles for each list item
      list.forEach((item, index) => {
        gsap.set(item, {
          //filter: "blur(5px)",
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
        //filter: "blur(0px)",
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      });

      gsap.set(heading, {
        //filter: "blur(5px)",
        opacity: 0.5,
        // filter: 'blur(5px)',
      });

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