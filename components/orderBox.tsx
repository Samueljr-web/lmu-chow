"use client";
import Image from "next/image";
import React from "react";

function OrderBox() {
  return (
    <div className="flex flex-col justify-between py-5 items-center bg-[#F3F3F3] shadow-md h-[450px] w-[320px] rounded-[30px] text-center">
      <h2 className="text-main-color font-secular-one text-2xl">Your Order</h2>

      <Image src={"/assets/order-icon.png"} alt="" width={238} height={238} />
      <div>
        <h4 className="text-[#92C385B8]">It looks like your box is empty</h4>
        <h3 className="text-[#92C385B8] font-medium text-[1.1rem]">
          Add your order to see it here
        </h3>
      </div>
    </div>
  );
}

export default OrderBox;
