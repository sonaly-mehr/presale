import React from "react";
import logo from "../../assets/images/logo.svg";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../constants";
import TokenLogo from "../../assets/images/777_TokenLogo1.png";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] pt-12 lg:pt-24 pb-12  relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
          <div className="basis-full lg:basis-[45%]">
            <img
              src={logo}
              alt=""
              className="w-full lg:w-[500px] h-auto lg:h-[110px]"
            />
            <p className="hidden md:block text-white text-base leading-[27.5px] font-montBlancRegular mt-14">
              Digital currencies may be unregulated in your jurisdiction. The
              value of digital currencies may go down as well as up. Profits may
              be subject to capital gains or other taxes applicable in your
              jurisdiction.
            </p>
            <p className="block md:hidden text-white text-[11.33px] leading-[17.8px] font-montBlancRegular mt-10">
              Players must be over 18 years of age & in the UK.If you win and
              you are under 18 then you will not be able to collect the prize
              and the competition will be drawn again.
            </p>
          </div>

          <div className="lg:mt-6">
            <h6 className="text-white text-[13.42px] lg:text-[20.49px] leading-[17.99px] lg:leading-[27.5px] font-montBlancBold mb-4 lg:mb-10">
              QUICK LINKS
            </h6>
            <ul className="flex flex-col gap-1 lg:gap-4">
              {FOOTER_LINKS?.map((item, index) => (
                <li key={index}>
                  <a
                    href={item?.link}
                    className="text-[11.45px] lg:text-[17.48px] font-montBlancRegular leading-[17.99px] lg:leading-[27.5px] text-white uppercase"
                  >
                    {item?.menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:mt-6">
            <h6 className="text-white text-[13.42px] lg:text-[20.49px] leading-[17.99px] lg:leading-[27.5px] font-montBlancBold mb-4 lg:mb-10">
              CONTACT
            </h6>
            <div className="flex flex-col gap-5">
              <span className="text-[11.45px] lg:text-[17.48px] font-montBlancRegular leading-[17.99px] lg:leading-[27.5px] text-white">
                Press@xxxxxxx
              </span>
              <span className="text-[11.45px] lg:text-[17.48px] font-montBlancRegular leading-[17.99px] lg:leading-[27.5px] text-white">
                Admin@xxxxxxx
              </span>
            </div>
            <div className="hidden lg:flex gap-4 items-center mt-10">
              {SOCIAL_LINKS?.map((item, index) => (
                <a
                  href={item?.link}
                  key={index}
                  className="bg-secondary rounded-xl w-[52px] h-[52px] p-3 text-5xl text-white flex justify-center items-center"
                >
                  {item?.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-white leading-[18.08px] lg:leading-[27.5px] flex flex-col-reverse lg:flex-row justify-between items-center pt-10 lg:pt-20 pb-0 lg:pb-10">
          <p className="font-montBlancRegular  text-[9px] lg:text-[17.48px] mt-1 lg:mt-0">
            © Copyright 2024 | All Rights Reserved. Powered by{" "}
            <a
              href="https://www.hiltonwebdesign.com/"
              target="_blank"
              className="underline"
            >
              HiltonWebDesign.com
            </a>
             
          </p>
          <ul className="flex gap-1 items-center">
            <li>
              <a
                href="#"
                className=" text-[11.5px] lg:text-[17.48px] underline font-montBlancRegular inline-block pr-1 border-r border-solid border-white"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  text-[11.5px] lg:text-[17.48px] underline font-montBlancRegular inline-block pr-1 pl-1 border-r border-solid border-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  text-[11.5px] lg:text-[17.48px] underline font-montBlancRegular"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0">
        <img src={TokenLogo} alt="" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Footer;
