'use client'


import React, { useState, useEffect } from 'react'
import { wordpressGraphQlApiUrl, frontendUrl, siteEmail, siteFromEmail } from "../../utils/variables";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { useModalContext } from '@/context/modalContext';



export default function PackageBookingForm({ data }) {

    const router = useRouter()

    const { setShowModal } = useModalContext()


    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [selectedPackage, setSelectedPackage] = useState(data);

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [sendProgress, setSendProgress] = useState(false)
    const [successLabel, setSuccessLabel] = useState(false)
    const [buttonLabel, setButtonLabel] = useState(true)



    //MAIL API
    async function sendMail() {

        const fromMail = siteFromEmail
        const toMail = siteEmail
        const mutationId = '9785645492879825297825'
        //const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello </p><p>Thank for downloading <strong>"A proven 5 step framework to establish your business online"</strong></p><a href="" style="background:#2fa4d8;display:block;text-align:center;padding:12px;margin:16px 0 0 0;color:#fff;text-decoration:none" target="_blank">Click Here to Download Now</a></div></body></html>`
        const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello Upturnist, you have a new message from packages<br/><br/><span style='color:#2fa4d8;'><strong>Name: ` + name + `<br/>Company Name: ` + companyName + `<br/>Phone:` + phone + `<br/>Website:` + website + `<br/>Description:` + description + `<br/>Package: ` + selectedPackage + `</strong</span</p</div></body></html>`

        const { data } = await fetch(wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query:
                    `
                    mutation SEND_EMAIL {
                        sendEmail(
                          input: {
                            to: "`+ toMail + `", 
                            from: "`+ fromMail + `", 
                            subject: "Grow Your Business with Upturnist’s Comprehensive Packages |`+ frontendUrl + `", 
                            body: "`+ bodyMail + `", 
                            clientMutationId: "`+ mutationId + `"
                          }
                        ) {
                          origin
                          sent
                          message
                        }
                      }
                      
      `
            }),
            next: { revalidate: 10 }
        }).then(res => res.json())

        // let headerPost = data

    }




    useEffect(() => {
    }, [name, companyName, phone]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Full name is required.';
        }


        if (!companyName) {
            errors.companyName = 'Company name is required.';
        }



        if (!phone) {
            errors.phone = 'Phone is required.';
        }


        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    //VALIDATE LIVE
    const changeValidate = () => {
        validateForm()
    }





    // Submit 
    const submitEmail = () => {



        validateForm()
        if (isFormValid) {
            sendMail()
            setButtonLabel(false)
            setSendProgress(true)
            setIsFormValid(false)

            setTimeout(() => {
                setSuccessLabel(true)
                setSendProgress(false)
                setButtonLabel(true)
                setName('')
                setCompanyName('')
                setWebsite('')
                setDescription('')
                setSuccessLabel(false)
                setShowModal(false)
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
            router.push('/thankyou-packages')
        }

    };

    return (
        <>

<div className="card card-effect rounded-[30px] lg:px-[90px] sm:px-[70px] sm:py-[70px] p-[30px]">
<h3 className="sub-heading sm:mb-[24px] mb-[16px]">Delighted by <span className="text-sky-500">{data} package?</span> Get in Touch by Completing the Form Below.
                </h3>

                <div>
                    <div className="grid gap-5">
                        <div className="grid sm:gap-4 gap-3 mt-2">
                            <input
                                className={`${errors.name ? 'border-red-500' : null} input-custom`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                //onBlur={changeValidate}
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                required
                            />
                            {errors.name && <span className='text-red-500 mb-[4px] text-[14px]'>{errors.name}</span>}
                            <input
                                className={`${errors.companyName ? 'border-red-500' : null} input-custom`}
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                //onBlur={changeValidate}
                                type="text"
                                placeholder="Company Name"
                                name="company_name"
                                required
                            />
                            {errors.place && <span className='text-red-500 mb-[4px] text-[14px]'>{errors.place}</span>}

                            <input
                                className={`input-custom`}
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                //onBlur={changeValidate}
                                type="text"
                                placeholder="Website"
                                name="website"
                            />
                            {errors.website && <span className='text-red-500 mb-[4px] text-[14px]'>{errors.website}</span>}
                            <PhoneInput
                                className={`${errors.phone ? 'border-red-500' : null} input-custom`}
                                placeholder="Phone"
                                value={phone}
                                onChange={setPhone}
                                defaultCountry="AE"
                                required
                            />
                            {errors.phone && <span className='text-red-500 mb-[4px] text-[14px]'>{errors.phone}</span>}
                            <textarea
                                className={`input-custom`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                                name="description"
                                rows={4}
                            >

                            </textarea>
                        </div>
                    </div>
                    <div className="btn-sc">
                    <button title="Submit" aria-label="Submit" type="button" className="mt-[20px] items-center flex" onClick={submitEmail}>
                                <span className={buttonLabel == false ? "hidden" : ""}>
                                Submit
                                </span>
                                <span className={`${sendProgress == false ? "hidden" : ""} flex gap-2 justify-center`}>
                                <svg className="animate-spin h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                </span>
                                </button>
                        {/* <div className={`${successLabel == false ? 'hidden' : ''} bg-green-400 fixed bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg p-4 text-center`}>Thank you for contacting us. We&apos;ll get back to you very soon</div> */}
                    </div>
                </div>
            </div>


        </>
    )
}
