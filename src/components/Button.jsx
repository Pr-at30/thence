import React from "react";

function Button({ text, onClick, disabled=false, isPrimary }) {
  const curr = isPrimary
    ? "bg-pblack hover:bg-dgray text-pwhite"
    : "bg-pwhite hover:bg-lgray text-pblack border-2 border-mgray";  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${curr} font-semibold font-manrope py-4 px-8 rounded-full`}
    >
      {text}
    </button>
  );
}

export default Button;
