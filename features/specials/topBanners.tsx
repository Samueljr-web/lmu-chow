import React from "react";

interface BannerType {
  head: string;
  description: string;
  bgImage: string;
  price: string | number;
}
const BannerDatas: BannerType[] = [
  {
    head: "Stand a chance to win an ipod 6th gen",
    description:
      "Buy a plate and get a raffle draw ticket with your name and your raffle number written down, come back on Sunday evening and to hear if your rafle number was called",
    bgImage: "specials/item7-logo.png",
    price: "₦3000 Per Plate",
  },
  {
    head: "Pay to get your brand banner advertised",
    description:
      "Get new audience to know about your brand, pay for your brands banner to be placed on the LMU chow website for a little token which you’d have to renew every month. ",
    bgImage: "specials/ad-banner.png",
    price: "₦10000 Per Month",
  },
  {
    head: "Want to be part of the LMU Chow family?",
    description:
      "Send a dm to LMU Chow on any of our social media platforms to apply to work with LMU Chow and to be a part of the family. Just state your full name, department, level and what you want to do",
    bgImage: "specials/image81.png",
    price: "Send A Dm",
  },
];
function TopBanners() {
  return (
    <div>
      <h2 className="font-secular-one text-main-color lg:text-3xl md:text-2xl text-xl">
        Attention! Attention!! Attention!!!
      </h2>

      <div className="mt-6 flex gap-10 justify-around overflow-auto no-scrollbar  scroll-smooth">
        {BannerDatas.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(/assets/${item.bgImage})` }}
            className="text-white h-[230px]  min-w-[500px] rounded-[30px] "
          >
            <div className="py-6 px-8 rounded-[30px] w-full h-full bg-bgdark0">
              <h4 className="w-72 text-xl font-secular-one">{item.head}</h4>

              <p className="text-sm mt-4">{item.description}</p>
              <div className="font-saira w-fit text-[1rem] bg-main-color p-2 rounded-xl mt-3">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBanners;
