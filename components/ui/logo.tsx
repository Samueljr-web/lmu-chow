"use client";
import { Seymour_One } from "next/font/google";
import React from "react";

const seymourOne = Seymour_One({ weight: ["400"], subsets: ["latin"] });
export const Logo = () => {
  return (
    <span>
      <h3
        className={`${seymourOne.className} lg:text-3xl md:text-2xl text-xl text-[#E3CA92]`}
      >
        LMU CHOW
      </h3>
    </span>
  );
};
