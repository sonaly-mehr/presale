import React from "react";
import spIcon from "../../../../assets/images/sp-icon.svg";
import { PiCopy } from "react-icons/pi";
import paul from "../../../../assets/images/paul.svg";
import partner1 from "../../../../assets/images/partner1.svg";
import partner2 from "../../../../assets/images/partner2.svg";
import partner3 from "../../../../assets/images/partner3.svg";
import partner4 from "../../../../assets/images/partner4.svg";
import token1 from "../../../../assets/images/token1.png";
import token2 from "../../../../assets/images/token2.png";
import token3 from "../../../../assets/images/token3.png";
import tokenLogo from "../../../../assets/images/777_TokenLogo3_mobile.png";

import StageOne from "./Components/StageOne";
const Hero = () => {
  return (
    <>
      <div className="relative md:static">
        <div className="container mx-auto">
          <div className="hero_shaddow">
            <div className="xl:bg-dark rounded-[20px] xl:pl-20 xl:pr-12 xl:py-16 flex flex-col xl:flex-row gap-8 justify-between mt-32 lg:mt-10 relative z-30 overflow-hidden text-center xl:text-left">
              <div className="xl:basis-[58%]">
                <div className="bg-secondary rounded-[30px] px-5 py-2 w-[240px] xl:w-fit mx-auto xl:mx-0">
                  <h6 className="font-sequel100Wide95 text-[12.91px] xl:text-[15.5px] text-white uppercase ">
                    777btc introduces
                  </h6>
                </div>

                <h1 className="text-primary font-sequel100Wide95 text-[36.79px] xl:text-[55px] leading-auto uppercase mt-1 xl:mt-[-5px]">
                  $PRIZE COIN
                </h1>
                <h2 className="text-white text-[27.49px] xl:text-[45px] leading-[29.6px] xl:leading-[48px] my-5 uppercase font-sequel100Wide95">
                  THE WORLDS FIRST CRYPTO GIVEAWAY PLATFORM.
                </h2>
                <div className="mt-[520px] lg:mt-[610px] xl:mt-0 xl:w-[370px]">
                  <a
                    href="https://777btc.gitbook.io/777btc-whitepaper/"
                    target="_blank"
                    className="block font-sequel100Wide65 text-[14.68px] uppercase text-white border border-solid border-white py-3 w-full text-center rounded-3xl"
                  >
                    WHITEPAPER
                  </a>
                  <div className="flex gap-3 justify-between w-full my-3">
                    <button className="flex-1 bg-primary rounded-3xl py-3 flex gap-4 items-center font-montBlancBold text-black text-[13px] justify-center">
                      <img src={spIcon} alt="" className="w-auto h-auto" /> KYC{" "}
                    </button>
                    <button className="flex-1 bg-primary rounded-3xl py-3 flex gap-4 items-center font-montBlancBold text-black text-[13px] justify-center">
                      <img src={spIcon} alt="" className="w-auto h-auto" />{" "}
                      AUDIT{" "}
                    </button>
                  </div>
                  <button className="w-full bg-white py-4 flex gap-2 items-center font-sequel100Wide95 text-[8.06px] xl:text-[10px] justify-center rounded-3xl">
                    <span className="flex gap-2 xl:gap-1">
                      CONTRACT:{" "}
                      <span className="font-sequel100Wide55">
                        2940UV02938SD...LKNS2SLKDNV
                      </span>
                    </span>{" "}
                    <PiCopy className="text-secondary text-base" />
                  </button>
                  <div className="text-secondary mt-4">
                    <span className="font-sequel100Wide65 text-[15.61px] xl:text-[16.62px]">
                      777BTC: Revolutionising Raffles on
                    </span>
                    <h4 className="font-sequel100Wide95 text-[28.56px] xl:text-3xl">
                      BASE NETWORK!
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative xxl:static">
                <div className="xl:basis-[42%] w-full absolute xl:static top-[-840px] lg:top-[-930px] mt-[50px] 2xl:mt-0 flex justify-center">
                  <StageOne />
                </div>
              </div>

              {/* TOKEN-LOGO */}
              <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 bottom-[-70px] w-[400px] h-[400px] z-[-1]">
                <img
                  src={token1}
                  alt=""
                  className="w-full h-full rotate-text"
                />
                <img
                  src={token2}
                  alt=""
                  className="absolute w-[220px] h-[220px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute w-[90px] h-[90px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={token3}
                    alt=""
                    className="w-full h-full rotate-text "
                  />
                </div>
              </div>
            </div>

            {/* quote */}
            <div className="w-full h-[140px] bg-primary rounded-es-[40px] rounded-ee-[40px] px-14 pt-5 hidden xl:flex gap-4 items-center relative -top-5 z-20 overflow-hidden">
              <h4 className="text-[23px] text-black font-sequel100Wide95 text-center uppercase">
                “A DOLLAR WON IS TWICE AS SWEET AS A DOLLAR EARNED”
              </h4>
              <span className="font-sequel100Wide65 uppercase text-[23px]">
                - paul newman
              </span>
              <img
                src={paul}
                alt=""
                className="w-auto h-auto absolute left-1/2 -translate-x-1/2 top-[-55px] bottom-0 z-[-1]"
              />
            </div>
          </div>
        </div>
        <div className="block md:hidden absolute top-[-140px] w-screen right-0 left-0 h-auto mix-blend-overlay z-[-1]">
          <img src={tokenLogo} alt="" className="w-full" />
        </div>
      </div>

      {/* Power By */}
      <div className="mt-10 xl:mt-0">
        <div className="xl:container mx-auto">
          <div className="w-full h-auto xl:h-[380px] bg-black  xl:rounded-es-[150px] xl:rounded-ee-[150px] px-4 xl:px-[45px] pt-6 pb-6 xl:pb-[45px] xl:relative -top-12 z-10 overflow-hidden">
            <div className="border border-solid border-primary rounded-[30px] xl:rounded-ss-[0px] xl:rounded-se-[0px] xl:rounded-es-[110px] xl:rounded-ee-[110px] h-full pt-5 pb-5 xl:pb-0 px-6 xl:px-[70px]">
              <h4 className="text-white font-sequel100Wide95 text-[20px] xl:text-[40px] text-center uppercase pb-7 xl:pb-9 pt-0 xl:pt-7">
                POWERED BY
              </h4>
              <div className="bg-white rounded-[14px] xl:rounded-full w-full py-2 lg:py-3 px-2 xl:px-8">
                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center  gap-y-5 xl:gap-y-0 gap-x-5">
                  {/* flex justify-between xl:justify-evenly items-ctoenter flex-wrap xl:flex-nowrap */}
                  <img
                    src={partner1}
                    alt=""
                    className="w-auto h-auto"
                    // w-full xl:w-auto h-[45px] 2xl:h-auto basis-[47.5%] md:basis-[32%] xl:basis-auto
                  />
                  <img src={partner2} alt="" className="w-auot h-auto" />
                  <img src={partner3} alt="" className="w-auto h-auto" />
                  <img src={partner4} alt="" className="w-auto h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
