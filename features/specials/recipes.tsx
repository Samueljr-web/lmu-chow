import { FMarketData, RecipeData } from "@/data";
import React from "react";

export default function Recipes() {
  const status = "Not available currently";
  return (
    <div className="">
      <h2 className="font-seymour-one text-primary">
        Trade Fair{" "}
        <span className="font-saira text-main-color">({status})</span>
      </h2>
      <div className="mt-6 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-6">
        {RecipeData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(/assets/${item.bgImage})` }}
            className="relative text-white h-[120px] w-[240px] rounded-[15px] bg-cover"
          >
            <div className=" py-3 px-4 rounded-[15px] w-full h-full bg-bgdark1">
              <h4 className="w-72 text-[1rem] font-secular-one">{item.name}</h4>
              <div className="absolute bottom-3 right-3 font-saira w-fit text-[12px] bg-main-color p-[5px] rounded-[7.5px] mt-3">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="font-seymour-one text-primary">
          Farmers Market{" "}
          <span className="font-saira text-main-color">({status})</span>
        </h2>
        <div className="mt-6 grid  xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-6">
          {FMarketData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(/assets/${item.bgImage})` }}
              className="relative text-white h-[120px] w-[240px] rounded-[15px] bg-cover"
            >
              <div className=" py-3 px-4 rounded-[15px] w-full h-full bg-bgdark1">
                <h4 className="w-72 text-[1rem] font-secular-one">
                  {item.name}
                </h4>
                <div className="absolute bottom-3 right-3 font-saira w-fit text-[12px] bg-main-color p-[5px] rounded-[7.5px] mt-3">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
