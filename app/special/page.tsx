import Footer from "@/components/footer";
import NavBar from "@/components/navBar/navBar";
import Specials from "@/features/specials";
import React from "react";

function Page() {
  return (
    <div className="bg-[#F3F3F3]">
      <NavBar bg={true} />
      <div className="md:px-10 px-4 mt-4">
        <Specials />
      </div>

      <Footer />
    </div>
  );
}

export default Page;
