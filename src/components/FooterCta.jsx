
'use client'
import { useModalContext } from "@/context/modalContext";
import Button from "./Buttons";


export default function FooterCta() {


  const { setModalFor, setShowModal  } = useModalContext()

  const openSubscribeModal = () => {
    setShowModal(true)
       setModalFor('subscribe')
   };

  return (
    <>
      <h2 className="heading-3">
        Join our community to learn the latest trends and insights in Branding and Digital Marketing.
      </h2>
      <p className="mt-[24px] text-lg">We assure no Spam, One email in a month!</p>
     <Button
                size="normal"
                label="Subscribe"
                icon={true}
                action={openSubscribeModal}
                classes="mt-[30px]"
                />

     </>
  )
}
