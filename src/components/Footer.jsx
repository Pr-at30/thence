import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="flex items-center justify-between bg-lgray rounded-3xl mt-20 py-4 px-2">
        <div className="flex items-center justify-center p-4 text-pblack">
          <FaRegCopyright className="m-2" />
          <span>Talup 2023. All rights reserved</span>
        </div>
        <div className="flex items-center justify-center p-4 text-pblack">
          <div className="border-b border-pblack h-6 m-2">Terms & Conditions</div>
          <div className="border-b border-pblack h-6 m-2">Privacy Policy</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
