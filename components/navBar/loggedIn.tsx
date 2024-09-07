"use client";

import React from "react";
import { Logo } from "../ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export default function LoggedIn() {
  const pathname = usePathname();
  return (
    <div className="flex items-center ">
      {/* <div className="flex rounded-full px-4 py-3 border-2 border-main-color">
        <span>
          <RiSearchLine className="block text-main-color text-3xl" />
        </span>
        <input
          type="text"
          placeholder="Search here"
          className="border-none bg-transparent px-3 placeholder:text-main-color text-white outline-none"
        />
      </div> */}
      <span>
        <RiSearchLine className="block text-main-color text-3xl" />
      </span>

      <div className="font-secular-one ml-5 mr-9 flex items-center gap-8 bg-main-color rounded-full px-4 py-3">
        <Link
          href={"/#"}
          className={`${
            pathname === "/"
              ? "bg-primary text-main-color"
              : "text-primary hover:bg-primary-fade hover:text-main-color"
          }  text-[18px] px-2 py-1 rounded-full`}
        >
          Home
        </Link>
        <Link
          href={"/special"}
          className={`${
            pathname === "/special"
              ? "bg-primary text-main-color"
              : "text-primary hover:bg-primary-fade hover:text-main-color"
          }  text-[18px] px-2 py-1 rounded-full`}
        >
          Special
        </Link>
        <Link
          href={"/profile"}
          className={`${
            pathname === "/profile"
              ? "bg-primary text-main-color"
              : "text-primary hover:bg-primary-fade hover:text-main-color"
          }  text-[18px] px-2 py-1 rounded-full`}
        >
          Profile
        </Link>
      </div>
      <span className="cursor-pointer">
        {}
        <span className="hover:hidden">
          <MdLogout className="text-main-color text-2xl" />
        </span>

        {/* <h4 className="text-red-600 text-xl">Log out</h4> */}
      </span>
    </div>
  );
}
