"use client";
import React from "react";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" mt-[5rem] flex justify-between overflow-hidden ">
      <div className="space-y-5 md:pl-10 pl-7 ">
        <h1
          className={`font-secular-one text-main-color  uppercase  xl:text-[50px] lg:text-[42px] text-[30px]`}
        >
          Get your food <br /> delivered to you <br /> no stress
        </h1>
        <h2 className="font-saira lg::text-[30px] md:text-[22px] text-[18px] text-[#92C385B8] font-medium">
          Don’t let your stomach rumble,{" "}
          <span className="text-primary">Order now!</span>
        </h2>

        <button className="border-2 border-[#E3CA92] text-[#E3CA92] p-3 w-[200px] backdrop-blur-[2px] rounded-[30px]">
          Sign In
        </button>
      </div>
      <div className="lg:block md:translate-x-[13.5rem] hidden">
        <Image
          src={"/assets/hero-image.png"}
          alt={"hero"}
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default HeroSection;
