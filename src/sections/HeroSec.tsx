"use client";

// Import all assets
import greenHash from "@/assets/images/HerosectionImgs/greenHash.png";
import iPhone from "@/assets/images/HerosectionImgs/iPhone.png";
import recordingImage from "@/assets/images/HerosectionImgs/recording.png";
import rightArrow from "@/assets/images/HerosectionImgs/arrowRight.png";
import shoesImage from "@/assets/images/HerosectionImgs/shoes.png";
import bagsCircle from "@/assets/images/HerosectionImgs/bagsCircle.png";
import bags from "@/assets/images/HerosectionImgs/bags.png";
import callIcon from "@/assets/images/HerosectionImgs/call.png";
import mobileCircle from "@/assets/images/HerosectionImgs/mobileCircle.png";
import mobile from "@/assets/images/HerosectionImgs/mobile.png";
import sms from "@/assets/images/HerosectionImgs/sms.png";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-b from-[#FFFFFF] via-[#FCFEF7] to-[#EDF3C9] overflow-hidden flex flex-col justify-start pt-10 md:pt-12 pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-6 md:mb-8 mt-10 md:mt-12 relative z-10">
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] mt-5 font-bold text-gray-900 mb-3 leading-tight">
            Turn Chats into 3–5X Conversions
          </h1>
          <p className="text-sm md:text-lg text-gray-600/90 font-normal max-w-3xl mx-auto mb-5 leading-relaxed mt-1">
            Strategic, automated WhatsApp marketing that helps customers decide
            faster, act sooner, and keep coming back to your brand
          </p>
          <a
            href="/demo"
            className="inline-flex items-center border border-[#D9DBE9] gap-2 bg-[#41C752] hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs md:text-sm mx-auto -ml-7"
          >
            Book a Demo
            <img src={rightArrow} alt="right arrow" className="w-[12px]" />
          </a>
        </div>

        {/* Phone Mockup Section */}
        <div className="relative flex items-center justify-center mt-2 md:mt-3">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[360px] md:w-[440px] h-[360px] md:h-[440px] bg-gradient-radial from-[#d5ffe5] via-[#f6fff6] to-transparent rounded-full opacity-70 translate-y-[-60px]" />
          </div>
          <div className="relative z-10 w-[300px] md:w-[350px] lg:w-[420px] -mt-4">
            <img
              src={iPhone}
              alt="iPhone mockup"
              className="w-full h-auto drop-shadow-2xl"
              loading="lazy"
            />
            <img
              src={greenHash}
              alt="WhatsApp hash icon"
              className="absolute inset-0 m-auto w-[90px] md:w-[120px] lg:w-[140px] h-auto drop-shadow-xl -translate-y-9"
              loading="lazy"
            />
            <div
              className="absolute hidden lg:block"
              style={{ left: "-18rem", top: "16%" }}
            >
              <div className="relative">
                <img
                  src={shoesImage}
                  alt="Featured shoes"
                  className="drop-shadow-2xl w-36 md:w-44 lg:w-56"
                  loading="lazy"
                />
                <div className="absolute -top-7 -right-4 w-10 md:w-11 lg:w-12 h-auto drop-shadow-lg">
                  <img
                    src={bagsCircle}
                    alt="Bags background"
                    className="w-full h-auto"
                  />
                  <img
                    src={bags}
                    alt="Bags"
                    className="absolute inset-0 m-auto w-[55%] h-auto"
                  />
                </div>
              </div>
              {/* Mobile Circle below Shoes */}
              <div className="mt-6 relative w-16 md:w-18 lg:w-20 h-auto mx-auto lg:ml-36">
                <img
                  src={mobileCircle}
                  alt="Mobile circle"
                  className="w-full h-auto"
                />
                <img
                  src={mobile}
                  alt="Mobile icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto"
                />
              </div>
            </div>

            <div
              className="absolute hidden lg:block"
              style={{ right: "-18.5rem", top: "8rem" }}
            >
              <div className="relative">
                <img
                  src={recordingImage}
                  alt="Recording interface"
                  className="drop-shadow-2xl w-52 md:w-60 lg:w-[19rem]"
                  loading="lazy"
                />
                <img
                  src={callIcon}
                  alt="Call icon"
                  className="absolute -top-1 -right-1 w-10 md:w-11 lg:w-12 h-auto drop-shadow-lg"
                />
              </div>
              {/* SMS icon below Recording */}
              <div className="mt-16 flex lg:-ml-2 translate-x-[0.5rem]">
                <img
                  src={sms}
                  alt="SMS icon"
                  className="w-12 md:w-14 lg:w-16 h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
