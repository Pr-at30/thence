import React from "react";
import Button from "../components/Button";
import LeftImg from "../assets/Mask group.svg";
import Aero from "../assets/aero.png";

function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="px-2">
        <div className="flex flex-col justify-center">
          {/* Upper */}
          <div className="text-center mt-12">
            <p className="font-cov text-cgreen text-2xl">Success stories</p>
            <div className="font-manrope text-4xl font-semibold text-center text-pblack">
              Every success journey <br /> we've encountered
            </div>
          </div>
          {/* Lower */}
          <div className="flex items-center justify-around">
            {/* Left */}
            <div className="px-32 py-10  relative">
              <img src={LeftImg} className="w-112" alt="Left" />
              <div className="absolute top-40 left-5 bg-pwhite rounded-2xl px-10 py-6 w-64 z-10 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer transition duration-500 ease-in-out">
                <p className="text-black text-5xl font-bold mb-4">40%</p>
                <p className="font-manrope text-[#828282] leading-6">
                  Achieved reduction in project execution time by optimising
                  team availability
                </p>
              </div>

              <div className="absolute bottom-0 right-20 bg-[#002E18] rounded-2xl px-8 py-8 w-64 z-30 shadow-lg hover:shadow-4xl hover:scale-105  cursor-pointer transition duration-200 ease-in-out">
                <p className="text-[#FFFFFF] text-5xl font-semibold mb-4">
                  $0.5
                  <span className="font-manrope text-lg text-[#A6A3A0] leading-6 ml-2">
                    MILLION
                  </span>
                </p>

                <p className="font-manrope text-[#828282] leading-6">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>

              <button className="absolute bg-pwhite shadow-lg bottom-20 left-20 font-semibold font-manrope py-4 px-6 rounded-full hover:shadow-2xl hover:scale-105 cursor-pointer transition duration-500 ease-in-out z-20">
                <div className="flex items-center justify-center">
                  <img src={Aero} alt="Arrow" className="w-12 h-12 mr-4" />
                  <div>
                    <p className="text-pblack">10 DAYS</p>
                    <p className="text-[#828282] text-sm leading-6">
                      Staff Deployment
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Right */}
            <div className="px-32 ">
              <p className="font-manrope text-pblack text-3xl font-semibold leading-12 mt-12">
                Enhance fortune 50 <br /> company’s insights <br /> teams
                research <br /> capabilities
              </p>

              <div class="mt-10 flex item-center">
                <div
                  class="flex items
                -center justify-center w-4 h-4 bg-[#2DA950] rounded-full mx-2"
                ></div>
                <div
                  class="flex items
                -center justify-center w-4 h-4 bg-[#E4E3E3] hover:bg-[#CAD0CB] rounded-full mx-2"
                ></div>
                <div
                  class="flex items
                -center justify-center w-4 h-4 bg-[#E4E3E3] hover:bg-[#CAD0CB] rounded-full mx-2"
                ></div>
              </div>

              <div class="flex items-left justify-left mt-48">
                <Button
                  text="Explore More ->"
                  onClick={() => console.log("Get Projects")}
                  isPrimary={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
