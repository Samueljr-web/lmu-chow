import React from "react";

interface QuoteProps {
  bg: string;
  head: string | React.ReactNode;
  paragraph: string | React.ReactNode;
}

export default function Quote({ bg, head, paragraph }: QuoteProps) {
  return (
    <div
      style={{ backgroundImage: `url(/assets/${bg})` }}
      className="h-[350px] bg-cover bg-center"
    >
      <div className="lg:px-10 md:px-8 px-4 flex justify-center flex-col w-full h-full bg-bgdark">
        <h2 className="font-secular-one text-main-color lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-medium">
          {head}
        </h2>
        <div className="flex items-center gap-2">
          <span className="p-[2px] w-[4px] bg-primary rounded-md h-[46px]"></span>
          <p className="font-saira text-primary lg:text-2xl text-[1.2rem] font-medium">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
