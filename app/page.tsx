"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navBar/navBar";
import Quote from "@/components/Quote";
import AuthModal from "@/features/auth/modal";
import HeroSection from "@/features/landingPage/heroSection";
import LmuHots from "@/features/landingPage/hots";
import Newsletter from "@/features/landingPage/newsletter";
import React from "react";

const quotes = [
  {
    bg: "bg-quote0.png",
    head: (
      <span>
        WHY STRESS TO GET FOOD?
        <br /> LMUCHOW GOT YOU !!!
      </span>
    ),
    paragraph: (
      <span>
        Let’s bring your food to you, wherever you are on campus.
        <br />
        Don’t keep your stomach waiting, order now!
      </span>
    ),
  },
  {
    bg: "bg-quote.png",
    head: (
      <span>
        GET THE BEST WITHOUT
        <br /> STRESS !!!
      </span>
    ),
    paragraph: (
      <span>
        Let LMUCHOW ease your stress.
        <br /> Place an order, and we’ll bring your chow to you.
      </span>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* <AuthModal /> */}
      <div className=" relative xl:h-screen lg:h-fit md:h-screen h-fit   bg-no-repeat bg-cover bg-[url('/assets/mainbg.png')]">
        <div className=" w-full h-full bg-bgdark sm:pb-16">
          <nav>
            <NavBar />
          </nav>
          <HeroSection />
        </div>
      </div>
      <LmuHots />
      {quotes.map((quote, index) => (
        <Quote
          key={index}
          bg={quote.bg}
          head={quote.head}
          paragraph={quote.paragraph}
        />
      ))}
      <Newsletter />
      <Footer />
    </>
  );
}
