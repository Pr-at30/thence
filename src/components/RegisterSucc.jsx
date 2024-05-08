import React from "react";
import Tick from "../assets/Tick.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterSucc({ success }) {
  const [time, setTime] = useState(5);

  const navigate = useNavigate();

  // Return to home page 5 sec after success is true
  useEffect(() => {
    if (success) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      if (time === 0) {
        navigate("/");
      }

      return () => clearInterval(interval);
    }
  }, [success, time]);

  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-32 ">
      <div className="flex flex-col items-center justify-center mb-48">
        <img src={Tick} alt="Tick Icon" className="w-16 h-16 mb-4" />

        <div className="font-cov text-2xl text-center text-cgreen mb-4 ">
          Success Submitted
        </div>

        <div className="text-5xl text-center font-semibold text-pblack mb-4 font-manrope">
          Congratulations
        </div>

        <div className="text-center font-medium text-xl text-[#727272] font-manrope leading-8 w-1/2 px-20 ">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>

      <div className="text-center font-regular text-m text-[#727272] mb-10 font-manrope">
        Redirecting you to Homepage in{" "}
        <span className="font-bold text-pblack">
          {time > 1 ? `${time} seconds` : `${time} second`}
        </span>
      </div>
    </div>
  );
}

export default RegisterSucc;
