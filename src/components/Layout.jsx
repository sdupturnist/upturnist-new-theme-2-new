"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useModalContext } from "@/context/modalContext";
import Images from "./Images";
import HeroForm from "./Forms/HeroForm";
import OfferForm from "./Forms/OfferForm";
import DownloadForm from "./Forms/DownloadForm";
import SubscribeFormBrevo from "./Forms/SubscribeForm";
import ScheduleCallForm from "./Forms/ScheduleCallForm";
import ScrollToTopPage from "./ScrollToTopPage";
import QuickContactForm from "./Forms/QuickEnquiryForm";
import PackageBookingForm from "./Forms/PackageBookingForm";
import Link from "next/link";
import { useEffect, useRef } from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import YouTube from "react-youtube";
import { useThemeContext } from "@/context/themeContext";

export default function Layout({ children, type }) {
  const {
    showModal,
    setShowModal,
    setModalData,
    modalData,
    modalFor,
    setIsClassAdded,
  } = useModalContext();

  const { theme } = useThemeContext();

  //console.log(modalData[0])

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Select all links in the component
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      const linkText = link.textContent.trim();

      // Set title and aria-label attributes
      if (linkText) {
        link.setAttribute("title", `Go to ${linkText}`);
        link.setAttribute("aria-label", `Navigate to ${linkText}`);
      }
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const closeModal = () => {
    setShowModal(!showModal);
    setIsClassAdded(false);
    setModalData([]);
  };

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // 1 for autoplay, 0 for no autoplay
    },
  };

  return (
    <div>
      {/* <BackgroundAnimation /> */}
      {theme === "dark" && <div className="blob" ref={cursorRef}></div>}
      {type == "landing-page" ? (
        <Header type="landing-page" />
      ) : (
        <Header type="normal" />
      )}

      <main className="relative z-10 w-[100%]">{children}</main>
      <Footer />

      {/* <ScrollToTopPage /> */}
      <QuickContactForm />

      {/* ALL POPUP MODALS START HERE */}
      {showModal && (
        <div
          className={`${
            theme === "dark" ? "bg-body-blur" : "bg-white"
          } fixed top-0 left-0 right-0 bottom-0  z-[99]  overflow-auto items-center grid py-20`}>
          <button
            title="Close button"
            className="closeButton mb-10"
            onClick={closeModal}>
            {theme === "light" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                viewBox="0 0 256 256">
                <path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>
              </svg>
            )}
            {theme === "dark" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#dcf4ff"
                viewBox="0 0 256 256">
                <path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>
              </svg>
            )}
          </button>

          {/* MODAL WORKS START*/}
          {modalFor == "work" ? (
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:py-[50px] py-[24px]">
                <div>
                  <Images
                    imageurl={modalData.imageUrl}
                    styles={""}
                    quality={100}
                    width={"500"}
                    height={"500"}
                    alt={modalData.heading}
                    placeholder={true}
                    classes={"block w-full rounded-[20px]"}
                  />
                </div>
                <div className="flex items-center">
                  <div className="lg:p-10 py-10 grid gap-7">
                    <h3 className="font-medium sm:text-5xl text-[34px]">
                      {modalData.heading}
                    </h3>
                    {modalData.description && (
                      <div
                        className="text-lg capitalize"
                        dangerouslySetInnerHTML={{
                          __html: modalData.description,
                        }}
                      />
                    )}
                    {modalData.projectStory && (
                      <div
                        className="text-lg"
                        dangerouslySetInnerHTML={{
                          __html: modalData.projectStory,
                        }}
                      />
                    )}
                    {modalData.link && (
                      <div className="mt-[30px]">
                        <Link
                          title={`Visit ${modalData.heading}`}
                          aria-label={`Visit ${modalData.heading}`}
                          href={modalData.link || "#"} // Default to '#' if modalData.link is falsy
                          className="btn button">
                          Visit website
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* MODAL WORKS END*/}

          {/* MODAL HERO START*/}
          {modalFor == "hero" ? (
            <div className="container-boxed">
              <div className="md:w-2/3 mx-auto">
                <HeroForm />
              </div>
            </div>
          ) : null}
          {/* MODAL WORKS END*/}

          {/* MODAL OFFER START*/}
          {modalFor == "offer" ? (
            <div className="container-boxed">
              <div className="md:w-2/3 mx-auto">
                <OfferForm />
              </div>
            </div>
          ) : null}
          {/* MODAL OFFER END*/}

          {/* MODAL DOWNLOAD START*/}
          {modalFor == "download" ? (
            <div className="container-boxed">
              <div className="md:w-2/3 mx-auto">
                <DownloadForm />
              </div>
            </div>
          ) : null}
          {/* MODAL DOWNLOAD END*/}

          {/* MODAL SUBSCRIBE START*/}
          {modalFor == "subscribe" ? (
            <div className="container-boxed">
              <div className="md:w-2/3 mx-auto">
                <SubscribeFormBrevo />
              </div>
            </div>
          ) : null}
          {/* MODAL SUBSCRIBE END*/}

          {/* MODAL SCHEDULE CALLBACK START*/}
          {modalFor == "callback" ? (
            <div className="container">
              <div className="md:w-2/3 mx-auto">
                {/* <BackgroundAnimation /> */}
                <ScheduleCallForm />
              </div>
            </div>
          ) : null}
          {/* MODAL SCHEDULE CALLBACK END*/}

          {/* MODAL PACKAGE START*/}
          {modalFor == "package" ? (
            <div className="container py-10">
              <div className="md:w-2/3 mx-auto">
                <PackageBookingForm data={modalData} />
              </div>
            </div>
          ) : null}
          {/* MODAL PACKAGE END*/}

          {/* MODAL VIDEO START*/}
          {modalFor == "video" ? (
            <div className="container py-10">
              <div className="md:w-2/3 mx-auto">
                <YouTube videoId={modalData} opts={opts} />
              </div>
            </div>
          ) : null}
          {/* MODAL VIDEO END*/}
        </div>
      )}
    </div>
  );
}
