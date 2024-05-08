import React from "react";
import Accordion from "./Accordion";
import Union from "../assets/Union.svg";
import { useState } from "react";


// To be pulled from the backend in the future
const faqs = [
  {
    question: "Do you offer freelancers?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question:
      "What’s the guarantee that I will be satisfied with the hired talent?",
    answer:
      "Payment methods depend on the platform and freelancer preferences. Common methods include credit card payments, PayPal, and bank transfers. Review freelancer payment terms before hiring.",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer:
      "Payment methods depend on the platform and freelancer preferences. Common methods include credit card payments, PayPal, and bank transfers. Review freelancer payment terms before hiring.",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex items-center justify-between bg-[#E8EEE7] rounded-3xl mt-20 ">
        {/* Left */}
        <div className="flex flex-col">
          {/* Upper */}
          <div className="text-left my-12 ml-32">
            <p className="font-cov text-[#9E9D9D] text-2xl mb-4">
              What's on your mind
            </p>
            <p className="font-manrope text-5xl font-semibold text-pblack">
              Ask Questions
            </p>
          </div>
          {/* Lower */}
          <img src={Union} alt="Union" className="w-100" />
        </div>
        {/* Right */}
        <div className="flex flex-col justify-center w-1/2 mr-20">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              handleClick={() => handleAccordionClick(index)}
              className="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faqs;
