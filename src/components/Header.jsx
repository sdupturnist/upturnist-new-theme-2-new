"use client";
import Link from "next/link";
import Logo from "./Logo";
import BlurAnimation from "./BlurAnimation";
import { motion, useViewportScroll } from "framer-motion";
import { HeaderData } from "@/hooks/headerData";
import { ContactData } from "@/hooks/contactData";
import { useModalContext } from "@/context/modalContext";
import { useState, useEffect, use } from "react";
import { useThemeContext } from "@/context/themeContext";
import { frontendUrl } from "@/utils/variables";
import Button from "./Buttons";
import BackgroundAnimation from "./BackgroundAnimation";
import { useSiteContext } from "@/context/siteContext";

function Nav({ initialData, type }) {
  const { setModalFor, setShowModal } = useModalContext();
  const { primaryMenu } = useSiteContext();

  const { dataHeader } = HeaderData(initialData);

  const { dataContact } = ContactData(initialData);

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  //THEME

  const { isDarkMode, theme, toggleTheme } = useThemeContext();

  const jsonString = JSON.stringify(dataHeader);

  function parseJsonSafe(jsonString) {
    try {
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    } catch (error) {
      return null;
    }
  }

  const jsonObject = parseJsonSafe(jsonString);

  const contactData = dataContact && dataContact.data.contact.nodes[0].contact;

  //console.log(contactData)

  //TOGGLE MENU
  const [isOpen, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [branding, setBranding] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const showMarketing = () => {
    setMarketing(!marketing);
    setBranding(false);
  };

  const showBranding = () => {
    setBranding(!branding);
    setMarketing(false);
  };

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useViewportScroll();

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const headerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.2 },
        y: { duration: 0.2 },
      },
    },
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        opacity: { duration: 0.2 },
        y: { duration: 0.2 },
      },
    },
  };

  const openCallBackModal = () => {
    setShowModal(true);
    setModalFor("callback");
  };

  const [expandedItems, setExpandedItems] = useState({});

  function FilteredCategories() {
    const toggleItem = (id) => {
      setExpandedItems((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    const groupedItems =
      primaryMenu &&
      primaryMenu.reduce((acc, item) => {
        const parentId = item.menu_item_parent || "0"; // Use '0' for top-level items
        if (!acc[parentId]) {
          acc[parentId] = [];
        }
        acc[parentId].push(item);
        return acc;
      }, {});

    const renderItems = (items, level = 0) => {
      return (
        <ul className={`list-ul-1 grid gap-[10px] sm:ml-[20px] mt-[10px]`}>
          {items.map((item) => (
            <li
              key={item.ID}
              className="sm:ml-[20px]"
              onClick={() => toggleItem(item.ID)}>
              {level === 0 ? (
                <p
                  className="cursor-pointer"
                  aria-label={item.post_title}
                  title={item.post_title}>
                  {item.post_title}
                </p>
              ) : (
                item.url && (
                  <Link
                    onClick={() => setOpen(!isOpen)}
                    aria-label={item.post_title}
                    title={item.post_title}
                    href={`${frontendUrl}/${item?.acf?.slug
                      .replace(/ /g, "-")
                      .toLowerCase()}`}>
                    {item.post_title}
                  </Link>
                )
              )}

              {/* Check for child items */}
              {
                expandedItems[item.ID] &&
                  groupedItems[item.ID] &&
                  groupedItems[item.ID].length > 0 &&
                  renderItems(groupedItems[item.ID], level + 1) // Recursive call for child items
              }
            </li>
          ))}
        </ul>
      );
    };

    return (
      primaryMenu &&
      groupedItems["0"]?.map((item, level = 0) => (
        <div key={item.ID}>
          {item?.acf?.parent === false ? (
            <Link
              href={`${frontendUrl}/${item?.acf?.slug
                .replace(/ /g, "-")
                .toLowerCase()}`}>
              {item?.title}
            </Link>
          ) : (
            <p
              className="cursor-pointer"
              aria-label={item.title}
              title={item.title}
              onClick={() => {
                toggleItem(item.ID);
              }}>
              {item?.title}
            </p> // For Perception Branding and Funnel Marketing
          )}
          {
            expandedItems[item.ID] &&
              groupedItems[item.ID] &&
              groupedItems[item.ID].length > 0 &&
              renderItems(groupedItems[item.ID]) // Render child items
          }
        </div>
      ))
    );
  }

  return (
    <>
      {/* HEADER START */}
      <motion.div
        className="sticky "
        variants={headerVariants}
        animate={hidden ? "hidden" : "visible"}>
        <header className={`header `}>
          <div className="sm:px-8 px-4">
            <div className="inner---">
              {/* {theme} */}
              <Logo
                url={`${frontendUrl}/images/upturnist-logo.webp`}
                alt="digital marketing expert in Dubai_upturnist_logo"
                logoTitle="digital marketing expert in Dubai_upturnist_logo"
                for_page={type}
              />
              <div className="wrpr--nav-1">
              <div 
             className={`btn-sc`} >
                <button className='cursor-pointer' onClick={toggleTheme}>
                {theme !== 'light' ?
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg>

                }
                </button>
                </div>
                {type == "normal" ? (
                  <>
                    <div className="sm:flex hidden">
                      <Button
                        size="normal"
                        label="Schedule a Call"
                        icon={false}
                        action={openCallBackModal}
                      />
                    </div>
                    <Button
                      size="normal"
                      label="Open Menu"
                      icon={true}
                      showLabel={false}
                      customIcon={`<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 10">
                      <g id="Group 12" stroke="#DCF4FF" strokeLinecap="round" strokeWidth="2">
                        <path id="Line 2" d="M7 1.346h18" />
                        <path id="Line 3" d="M1 8.346h17" />
                      </g>
                    </svg>`}
                      action={() => setOpen(!isOpen)}
                      classes="!p-0"
                    />
                  </>
                ) : (
                  <Button
                  size="normal"
                  label="Schedule a Call"
                  icon={false}
                  action={openCallBackModal}
                />
                )}
              </div>
            </div>
          </div>
        </header>
      </motion.div>
      {/* HEADER END */}
      {/* MOBILE MENU */}
      <div className={`header-nav-wrpr  ${isOpen ? "show-nav" : "hidden-nav"}`}>
        <div className="wrpr backdrop-blur-xl">
          <button
            title="Close Menu"
            aria-label="Close Menu"
            className="closeButton mb-10"
            onClick={() => setOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#dcf4ff"
              viewBox="0 0 256 256">
              <path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>
            </svg>
          </button>
          <div className="nav-wrpr--">
            <div className="col- grid gap-[10px]">
              <span className="label--">MENU</span>
              {FilteredCategories()}
            </div>
            <div>
              <span className="label--">CONTACT</span>
              <div className="col--2">
                <p
                  className="p-1--"
                  dangerouslySetInnerHTML={{
                    __html: contactData && contactData.heading,
                  }}
                />
                <p
                  className="p-2--"
                  dangerouslySetInnerHTML={{
                    __html: contactData && contactData.address,
                  }}
                />
                {contactData && (
                  <>
                    <Link
                      className="para"
                      aria-label="Phone"
                      href={`tel:${contactData && contactData.phone}`}>
                      {dataContact && contactData.phone}
                    </Link>
                    <Link
                      className="para"
                      aria-label="Email"
                      href={`mailto:{contactData.email && contactData.email}`}>
                      {contactData && contactData.email}
                    </Link>
                  </>
                )}
                <ul className="social">
                  {contactData && (
                    <>
                      <li>
                        <Link
                          aria-label="Facebook"
                          title="Facebook link header"
                          href={contactData && contactData.facebook}
                          target="_blank">
                          <svg
                            className="e-font-icon-svg e-fab-facebook-f"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Instagram"
                          title="Instagram link header"
                          href={contactData && contactData.instagram}
                          target="_blank">
                          <svg
                            className="e-font-icon-svg e-fab-instagram"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Linkedin"
                          title="Linkedin link header"
                          href={contactData && contactData.linkedin}
                          target="_blank">
                          <svg
                            className="e-font-icon-svg e-fab-linkedin"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                          </svg>
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BlurAnimation position="bottom left" />
      </div>
    </>
  );
}

export default Nav;
