import { lmuHots } from "@/data";
import Image from "next/image";
import React from "react";

const LmuHots = () => {
  return (
    <div className={`font-secular-one bg-[#F3F3F3] py-10`}>
      <h2 className="text-primary text-center lg:text-[55px] md:text-[46px] text-[36px] font-normal font-secular-one">
        THE LMU HOTS !!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lmuHots.map((item, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <div className="flex justify-center relative w-32 h-32 md:w-44 md:h-44 lg:w-[13rem] lg:h-[13rem] ">
              <Image
                src={item.icon}
                alt=""
                layout="fill"
                // sizes="lg"
                objectFit="cover"
                className="rounded-full"
              />
              <span className="font-secular-one text-[18px] md:text-[22px] w-[160px] lg:text-[26px] md:w-[180px] lg:w-[200px] rounded-[30px] text-center text-white p-1 bg-primary absolute bottom-[-2rem]">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LmuHots;
