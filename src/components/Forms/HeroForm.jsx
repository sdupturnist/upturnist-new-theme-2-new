"use client";

import React, { useState, useEffect } from "react";
import {
  wordpressGraphQlApiUrl,
  frontendUrl,
  siteEmail,
  siteFromEmail,
} from "../../utils/variables";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";
import { useModalContext } from "@/context/modalContext";
import { useThemeContext } from "@/context/themeContext";

export default function HeroForm({ data }) {
  const router = useRouter();

  // console.log(data[0])

  const { setShowModal } = useModalContext();
  const { theme } = useThemeContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [sendProgress, setSendProgress] = useState(false);
  const [successLabel, setSuccessLabel] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(true);

  //MAIL API
  async function sendMail() {
    const fromMail = siteFromEmail;
    const toMail = siteEmail;
    const mutationId = "9785645492879825297825";
    //const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello </p><p>Thank for downloading <strong>"A proven 5 step framework to establish your business online"</strong></p><a href="" style="background:#2fa4d8;display:block;text-align:center;padding:12px;margin:16px 0 0 0;color:#fff;text-decoration:none" target="_blank">Click Here to Download Now</a></div></body></html>`
    const bodyMail =
      `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello Upturnist, you have a new message from Take Advantange of the free SEO visibility Report<br/><br/><span style='color:#2fa4d8;'><strong>Website: ` +
      website +
      `<br/>Name: ` +
      name +
      `<br/>Place: ` +
      place +
      `<br/>Phone: ` +
      phone +
      `<br/>Email: ` +
      email +
      `</strong></span></p></div></body></html>`;

    const { data } = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          `
                    mutation SEND_EMAIL {
                        sendEmail(
                          input: {
                            to: "` +
          toMail +
          `", 
                            from: "` +
          fromMail +
          `", 
                            subject: "Free SEO visibility Report |` +
          frontendUrl +
          `", 
                            body: "` +
          bodyMail +
          `", 
                            clientMutationId: "` +
          mutationId +
          `"
                          }
                        ) {
                          origin
                          sent
                          message
                        }
                      }
                      
      `,
      }),
      next: { revalidate: 10 },
    }).then((res) => res.json());

    // let headerPost = data
  }

  useEffect(() => {}, [name, email, phone]);

  // Validate form
  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Full name is required.";
    }

    if (!website) {
      errors.website = "Website is required.";
    }

    if (!place) {
      errors.place = "Place is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!phone) {
      errors.phone = "Phone is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  //VALIDATE LIVE
  const changeValidate = () => {
    validateForm();
  };

  // Submit
  const submitEmail = () => {
    validateForm();
    if (isFormValid) {
      sendMail();
      setButtonLabel(false);
      setSendProgress(true);
      setIsFormValid(false);

      setTimeout(() => {
        setSuccessLabel(true);
        setSendProgress(false);
        setButtonLabel(true);
        setName("");
        setEmail("");
        setPhone("");
        setPlace("");
        setWebsite("");
        setSuccessLabel(false);
        setShowModal(false);
      }, 3000);
      // setTimeout(() => {
      //     setName('')
      //     setEmail('')
      //     setPhone('')
      //     setPlace('')
      //     setWebsite('')
      // }, 4000);
      // setTimeout(() => {
      //     setSuccessLabel(false)
      //     setModal(false)
      // }, 10000);
      router.push("/thankyou");
    }
  };

  return (
    <>
      <div
        className={
          theme === "dark"
            ? "card card-effect rounded-[30px] sm:p-[40px] p-[24px]"
            : null
        }>
        <h3 className="heading-3 sm:mb-[16px] mb-[8px]">
          Our Guarantee; No SPAM and your data is safe with us!
        </h3>
        <div>
          <div className="grid gap-5 ">
            <div className="grid gap-4 mt-5">
              <input
                className={`${
                  errors.website ? "border-red-500" : null
                } input-custom`}
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                //onBlur={changeValidate}
                type="text"
                placeholder="Website"
                name="website"
                required
              />
              {errors.website && (
                <span className="text-red-500 mb-[4px] text-[14px]">
                  {errors.website}
                </span>
              )}
              <input
                className={`${
                  errors.name ? "border-red-500" : null
                } input-custom`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                //onBlur={changeValidate}
                type="text"
                placeholder="Full Name"
                name="name"
                required
              />
              {errors.name && (
                <span className="text-red-500 mb-[4px] text-[14px]">
                  {errors.name}
                </span>
              )}
              <input
                className={`${
                  errors.place ? "border-red-500" : null
                } input-custom`}
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                //onBlur={changeValidate}
                type="text"
                placeholder="Place"
                name="place"
                required
              />
              {errors.place && (
                <span className="text-red-500 mb-[4px] text-[14px]">
                  {errors.place}
                </span>
              )}
              <input
                className={`${
                  errors.email ? "border-red-500" : null
                } input-custom`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onBlur={changeValidate}
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              {errors.email && (
                <span className="text-red-500 mb-[4px] text-[14px]">
                  {errors.email}
                </span>
              )}
              <PhoneInput
                className={`${
                  errors.phone ? "border-red-500" : null
                } input-custom phone-input`}
                placeholder="Phone"
                value={phone}
                onChange={setPhone}
                defaultCountry="AE"
                required
              />
              {errors.phone && (
                <span className="text-red-500 mb-[4px] text-[14px]">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
          <div className="btn-sc">
            <button
              title="Submit"
              aria-label="Submit"
              type="button"
              className="mt-[20px] items-center flex"
              onClick={submitEmail}>
              <span className={buttonLabel == false ? "hidden" : ""}>
                Submit
              </span>
              <span
                className={`${
                  sendProgress == false ? "hidden" : ""
                } flex gap-2 justify-center`}>
                <svg
                  className="animate-spin h-5 w-5  text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            </button>

            {/* <div className={`${successLabel == false ? 'hidden' : ''} bg-green-400 fixed bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg p-4 text-center`}>Thank you for contacting us. We&apos;ll get back to you very soon</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
