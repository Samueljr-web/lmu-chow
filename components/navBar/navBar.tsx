"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "../ui/logo";
import Button from "../ui/button";
import LoggedIn from "./loggedIn";
import { url } from "inspector";

interface navbar {
  bg?: boolean;
}
function NavBar({ bg }: navbar) {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  useEffect(() => {
    const checkData = localStorage.getItem("user");
    if (checkData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bg ? "/assets/nav-bg.png" : ""})` }}
      className="flex justify-between items-center md:px-10 px-7 py-5"
    >
      {/* <div className=" w-full h-full bg-bgdark"> */}
      <Logo />
      {isLoggedIn ? (
        <LoggedIn />
      ) : (
        <Button w="10rem" p={"10px"} rounded={"20px"}>
          Get Started
        </Button>
      )}
      {/* </div> */}
    </div>
  );
}

export default NavBar;
