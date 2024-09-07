import React from "react";
import TopBanners from "./topBanners";
import OrderBox from "@/components/orderBox";
import Recipes from "./recipes";

function Specials() {
  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="bg-white rounded-[60px] w-full h-fit py-8 md:px-12 px-8"
    >
      <TopBanners />

      <div className="flex justify-between mt-10">
        <Recipes />
        <OrderBox />
      </div>
    </div>
  );
}

export default Specials;
