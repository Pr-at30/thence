import React from "react";
import Brunel from "../assets/brunel.svg";
import Cross from "../assets/cross.svg";
import RegForm from "../components/RegForm";
import RegisterSucc from "../components/RegisterSucc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-4 py-2">
      {/* Top */}
      <div className="flex items-center justify-between mb-10">
        <div className="px-4">
          <img src={Brunel} alt="Brunel Logo" />
        </div>
        {!success ? (
          <div
            className="px-4 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Cross} alt="Cross Icon" />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {!success ? (
        <RegForm setSuccess={setSuccess} />
      ) : (
        <RegisterSucc success={success} />
      )}
    </div>
  );
}

export default Register;
