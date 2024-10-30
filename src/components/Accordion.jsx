import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);


  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqContainer grid sm:gap-[24px] gap-[16px]">
      {data && JSON.parse(data).map((faq, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="card rounded-[20px] p-[16px]"
        >
          <div
            className="flex items-center justify-between cursor-pointer p-[14px] "
            onClick={() => toggleAnswer(index)}
          >
            <p className="pr-[10px] m-0 sm:text-[18px] text-[15px]">{faq.question}</p>
            {openIndex === index ? (
              <MinusIcon className="max-w-5 max-h-5 min-w-5 min-h-5 text-gray-300" />
            ) : (
              <PlusIcon className="max-w-5 max-h-5 min-w-5 min-h-5 text-gray-300" />
            )}
          </div>
          {openIndex === index && (
            <p className="sm:p-[14px] p-[10px] !pt-0">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
