"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  rounded: string | number;
  w: string;
  p: string;
}
const Button = ({ children, type, onClick, rounded, w, p }: ButtonProps) => {
  return (
    <button
      style={{
        width: w,
        borderRadius: rounded,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: p,
      }}
      onClick={onClick}
      type={type}
      className={`flex py-3 items-center lg:text-2xl md:text-xl text-md text-center justify-center text-white bg-gradient-to-b from-orange-200 via-orange-200 to-stone-500  hover:from-stone-500  hover:via-orange-200 hover:to-orange-200 `}
      // className="flex items-center text-2xl text-center justify-center text-white bg-gradient-to-b from-stone-500 via-stone-500 to-orange-200  hover:from-orange-200  hover:via-stone-500 hover:to-stone-500 "
    >
      {children}
    </button>
  );
};

export default Button;
