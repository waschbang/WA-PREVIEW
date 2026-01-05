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
// Brand logos
import levelLogo from "@/assets/levellogo.png";
import imagineLogo from "@/assets/Imagine logo.png";
import schbangLogo from "@/assets/Schbang Logo_Main.png";
import skillhouseLogo from "@/assets/skillhouse.png";
import pdpLogo from "@/assets/pdp.png";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[93vh] md:h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FCFEF7] to-[#EDF3C9] overflow-hidden flex flex-col">
      {/* Main Hero Content - responsive height */}
      <div className="h-[68vh] md:h-[85vh] flex flex-col pt-[12vh] md:pt-[10vh] px-4 relative">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content - Text */}
          <div className="text-center relative z-10">
            <h1 className="text-[clamp(1.3rem,3.5vw,2.7rem)] font-bold text-gray-900 mt-[1vh] md:mt-[3vh] mb-[1vh] leading-tight">
              Turn Chats into 3–5X Conversions
            </h1>
            <p className="text-[clamp(0.7rem,1.25vw,1rem)] text-gray-600/90 font-normal max-w-3xl mx-auto leading-relaxed mb-[3vh]">
              Strategic, automated WhatsApp marketing that helps customers decide
              faster, act sooner, and keep coming back to your brand
            </p>

            {/* Button - with equal spacing from text above */}
            <a
              href="/demo"
              className="inline-flex items-center border border-[#D9DBE9] gap-2 bg-[#41C752] hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-[clamp(0.7rem,1vw,0.875rem)] md:mb-[3vh]"
            >
              Book a Demo
              <img src={rightArrow} alt="right arrow" className="w-[12px]" />
            </a>
          </div>

          {/* Phone Mockup Section - positioned at bottom of container */}
          <div className="absolute -bottom-16 md:-bottom-9 left-1/2 -translate-x-1/2 flex items-end justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[min(320px,26vw)] md:w-[min(380px,24vw)] h-[min(320px,26vw)] md:h-[min(380px,24vw)] bg-gradient-radial from-[#d5ffe5] via-[#f6fff6] to-transparent rounded-full opacity-70 translate-y-[-60px]" />
            </div>
            <div className="relative z-10 w-[68vw] md:w-[min(340px,22vw)] lg:w-[min(400px,20vw)]">
              <img
                src={iPhone}
                alt="iPhone mockup"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
              <img
                src={greenHash}
                alt="WhatsApp hash icon"
                className="absolute inset-0 m-auto w-[15vw] md:w-[min(100px,6vw)] lg:w-[min(120px,5vw)] h-auto drop-shadow-xl -translate-y-8"
                loading="lazy"
              />
              <div
                className="absolute hidden lg:block"
                style={{ left: "-50%", top: "14%" }}
              >
                <div className="relative inline-block">
                  <img
                    src={shoesImage}
                    alt="Featured shoes"
                    className="drop-shadow-2xl w-[min(200px,11vw)]"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 -translate-y-[30%] translate-x-[20%] w-[25%] h-auto drop-shadow-lg">
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
                <div className="mt-2 relative w-[min(72px,4.5vw)] h-auto mx-auto lg:mr-auto lg:ml-12">
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
                style={{ right: "-55%", top: "20%" }}
              >
                <div className="relative">
                  <img
                    src={recordingImage}
                    alt="Recording interface"
                    className="drop-shadow-2xl w-[min(270px,14vw)]"
                    loading="lazy"
                  />
                  <img
                    src={callIcon}
                    alt="Call icon"
                    className="absolute -top-1 -right-1 w-[min(50px,3vw)] h-auto drop-shadow-lg"
                  />
                </div>
                {/* SMS icon below Recording */}
                <div className="mt-20 flex lg:ml-10 translate-x-[0.5rem]">
                  <img
                    src={sms}
                    alt="SMS icon"
                    className="w-[min(56px,3.5vw)] h-auto drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Container - MOBILE ONLY */}
      <div className="md:hidden w-full h-[13vh] bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center px-4 relative z-30 mt-auto translate-y-4">
        {/* Text at top */}
        <div className="text-center mb-1">
          <span className="text-gray-900 text-sm font-normal pt-2 block">
            We are trusted by
          </span>
          <span className="text-[#54ce63] text-base font-medium">
            50+ brands
          </span>
        </div>

        {/* Logo carousel - animated */}
        <div className="w-full flex items-center pb-2 overflow-hidden">
          <div className="flex items-center gap-8  animate-marquee">
            {/* Set 1 */}
            <img src={levelLogo} alt="Level" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-12 w-auto object-contain grayscale shrink-0" />
            {/* Set 2 */}
            <img src={levelLogo} alt="Level" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-12 w-auto object-contain grayscale shrink-0" />
            {/* Set 3 */}
            <img src={levelLogo} alt="Level" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-12 w-auto object-contain grayscale shrink-0" />
            {/* Set 4 */}
            <img src={levelLogo} alt="Level" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-6 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-12 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-12 w-auto object-contain grayscale shrink-0" />
          </div>
        </div>
      </div>

      {/* Trusted Brands Container - DESKTOP ONLY */}
      <div className="hidden md:flex w-full bg-white/80 backdrop-blur-sm flex-row items-center justify-start pl-12 lg:pl-16 pr-0 relative z-30 h-[10vh] mt-auto">
        {/* Left side - Text */}
        <div className="w-[35%] flex flex-col justify-center items-start text-left">
          <span className="text-gray-900 text-2xl lg:text-[1.25rem] font-semibold leading-tight">
            We are trusted by
          </span>
          <span className="text-[#54ce63] text-[2rem] lg:text-[1.75rem] font-semibold leading-tight">
            50+ brands
          </span>
        </div>

        {/* Right side - Brand logos carousel */}
        <div className="flex-1 h-full flex items-center overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {/* Set 1 */}
            <img src={levelLogo} alt="Level" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-14 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-14 w-auto object-contain grayscale shrink-0" />
            {/* Set 2 */}
            <img src={levelLogo} alt="Level" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-14 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-14 w-auto object-contain grayscale shrink-0" />
            {/* Set 3 */}
            <img src={levelLogo} alt="Level" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-14 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-14 w-auto object-contain grayscale shrink-0" />
            {/* Set 4 */}
            <img src={levelLogo} alt="Level" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={imagineLogo} alt="Imagine" className="h-10 w-auto object-contain grayscale shrink-0" />
            <img src={schbangLogo} alt="Schbang" className="h-7 w-auto object-contain grayscale shrink-0" />
            <img src={skillhouseLogo} alt="Skillhouse" className="h-14 w-auto object-contain grayscale shrink-0" />
            <img src={pdpLogo} alt="PDP" className="h-14 w-auto object-contain grayscale shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
