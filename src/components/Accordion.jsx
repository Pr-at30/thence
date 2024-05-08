import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";


function Accordion({ faq, isOpen, handleClick }) {
  const question = faq.question;
  const answer = faq.answer;
  
  return (
    <div className="hover:cursor-pointer border-b border-[#D7D7D7]">
      <div
        className="flex items-center justify-between p-4 rounded-lg"
        onClick={handleClick}
        >
        <div className="font-manrope text-lg text-pblack font-semibold w-96">
          {question}
        </div>
        {isOpen ? (
          <FiMinus className="text-black" />
        ) : (
          <FiPlus className="text-black" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center p-6  rounded-lg">
          <p className="font-manrope leading-12 text-[#617275]">{answer}</p>
        </div>
      )}
    </div>
  );
}


export default Accordion;
