import React from "react";
import Button from "../components/Button";
import Brunel from "../assets/brunel.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between font-manrope rounded-full border border-stroke px-4 py-4">
        <div className="px-4">
          <img src={Brunel} alt="Brunel Logo" />
        </div>
        <div className="flex items-center">
          <div className="mx-2">
            <Button
              text="Get Projects"
              onClick={() => {
                navigate("/registration");
              }}
              isPrimary={false}
            />
          </div>
          <Button
            text="Onboard Talent"
            onClick={() => console.log("Onboard Talent")}
            isPrimary={true}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
