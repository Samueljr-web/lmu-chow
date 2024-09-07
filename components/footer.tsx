import React from "react";
import { Logo } from "./ui/logo";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <section className="">
      <div className="px-10 flex md:flex-row flex-col gap-5 justify-around py-9">
        <div className="space-y-2">
          <Logo />
          <h3 className="font-secular-one text-main-color">
            GET YOUR FOOD DELIVERED
            <br /> TO YOU NO STRESS
          </h3>
        </div>
        <div>
          <h2
            className={`font-seymour-one text-primary font-medium lg:text-3xl md:text-2xl text-xl`}
          >
            Contact Us
          </h2>
          <div className="mt-2 flex gap-3">
            <Link href={"mailto:lmuchow@lmu.edu.ng"}>
              <MdEmail className="text-main-color text-2xl" />
            </Link>
            <Link href={""}>
              <BsTelegram className="text-main-color text-2xl" />
            </Link>
            <Link href={""}>
              <RiInstagramFill className="text-main-color text-2xl" />
            </Link>
          </div>
        </div>
        <div>
          <h2
            className={`font-seymour-one text-primary font-medium lg:text-3xl md:text-2xl text-xl`}
          >
            Quick Links
          </h2>
          <div className="font-secular-one mt-2 flex flex-col gap-3 text-main-color">
            <Link href={""}>Food Categories</Link>
            <Link href={""}>Order Now</Link>
            <Link href={""}>News Letter</Link>
          </div>
        </div>
      </div>
      <div className="h-[120px] bg-[url('/assets/mainbg.png')]">
        <div className="font-secular-one flex items-center justify-around  lg:text-2xl md:text-xl text-sm w-full h-full bg-bgdark">
          <h2 className="text-white">Terms & Condition</h2>
          <h2 className="text-white">&copy; 2024 LMU CHOW</h2>
          <h2 className="text-white">PRIVACY POLICY</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;
