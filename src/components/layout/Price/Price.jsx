import React from "react";
import { WHY_ENTER } from "../../../constants";
import listDisc from "../../../assets/images/listDisc.svg";
import cryptoBg from "../../../assets/images/price-crypto.jpg";
import coin3 from "../../../assets/images/coin3.png";
import tokenLogo from "../../../assets/images/price_TokenLogo.png";
import paul from "../../../assets/images/paul.svg";
import HowToParticipate from "./HowToParticipate";
import DailyGiveAways from "./DailyGiveAways";
import coin4 from "../../../assets/images/coin4.png";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";

const Price = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto price-section">
        <div className=" h-auto lg:rounded-3xl mt-[100px] lg:mt-10">
          <div className="lg:bg-dark rounded-[20px]">
            <div className="text-center h-auto  lg:bg-dark px-4 py-8 lg:py-16 rounded-[20px] lg:rounded-3xl relative lg:static z-[10]">
              <h2 className="heading pb-6">$PRIZE’S</h2>
              <p className="font-sequel100Wide45 text-base lg:text-[22px] leading-[20px] lg:leading-[30px] text-white lg:w-[80%] m-auto">
                Welcome to the ultimate crypto giveaway at 777BTC. We love
                giveaways so much, we've turned our whole $PRIZE presale into
                one! This time, we're upping the ante with a grand prize that
                will make any crypto enthusiast's heart race - 1 Bitcoin (BTC)! 
              </p>
            </div>

            <div className="bg-dark rounded-[20px]">
              <div className="overflow-hidden relative z-10  rounded-[20px]">
                <img
                  src={cryptoBg}
                  alt=""
                  className="w-full h-auto rounded-[20px] hidden md:block"
                />
                <img
                  src={coin3}
                  alt=""
                  className="w-full h-auto rounded-[20px]  md:hidden"
                />
              </div>

              <div className="bg-dark text-center pt-10 lg:pt-[70px] pb-3 lg:pb-[95px] relative px-2 lg:px-0">
                <h2 className="heading !text-primary uppercase mb-5">
                  The Grand Prize: 1 BTC
                </h2>
                <p className="font-sequel100Wide45 text-base lg:text-[22px] leading-[20px] lg:leading-[30px] text-white lg:w-[80%] m-auto">
                  Imagine winning 1 BTC in a single giveaway draw. That's right,
                  we're giving away 1 whole Bitcoin to one lucky winner! With
                  the current market value, this prize could be a life-changer,
                  opening doors to endless possibilities in the crypto world.
                </p>
                <div className="absolute top-[-550px] bottom-0 left-0 right-0  overflow-hidden hidden lg:block">
                  <img
                    src={tokenLogo}
                    alt=""
                    className=" w-full h-auto mix-blend-overlay"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-dark bg-center py-8 lg:pl-20 lg:pr-20 lg:py-24 rounded-[20px] lg:rounded-3xl  crypto-bg mt-[-20px] lg:mt-0"
                // relative top-[-35px] z-[-1]
              >
                <div className="block md:hidden">
                  <img src={coin4} alt="" className="w-full h-auto" />
                </div>
                <div className="text-left">
                  <h2 className="font-sequel100Wide95 uppercase text-[25px] lg:text-[50px] text-primary lg:text-white mb-8 lg:mb-14 text-center lg:text-left pt-0 lg:pt-0">
                    Why Enter?
                  </h2>
                  <div className="px-4 lg:px-0">
                    <ul className="flex flex-col gap-4 md:gap-6 w-full md:w-[70%] xl:w-[55%]">
                      {WHY_ENTER?.map((list) => (
                        <li className="flex items-center gap-4 font-sequel100Wide45 text-xs md:text-sm lg:text-xl leading-[15px] lg:leading-[30px] text-white">
                          <img
                            src={listDisc}
                            alt=""
                            className="w-[23px] h-[23px] lg:w-auto lg:h-auto"
                          />
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* quote */}
          <div className="w-full h-[160px] lg:h-[140px] bg-primary rounded-es-[20px] lg:rounded-es-[40px] rounded-ee-[20px] lg:rounded-ee-[40px] px-4 lg:px-14 pt-9 lg:pt-5 flex flex-col lg:flex-row gap-4 items-center relative -top-5 z-[-1] overflow-hidden">
            <h4 className="text-[15px] lg:text-[23px] text-black font-sequel100Wide95 text-center uppercase">
              “A DOLLAR WON IS TWICE AS SWEET AS A DOLLAR EARNED”
            </h4>
            <span className="font-sequel100Wide65 uppercase text-[15px] lg:text-[23px]">
              - paul newman
            </span>
            <img
              src={paul}
              alt=""
              className="w-auto h-auto absolute left-1/2 -translate-x-1/2 top-[30px] lg:top-[-55px] bottom-0 z-[-1]"
            />
          </div>
        </div>
      </div>

      {/* HOW TO PARTICIPATE */}
      <HowToParticipate />

      {/* DAILY GIVEAWAYS */}
      <DailyGiveAways />
      <Footer />
    </div>
  );
};

export default Price;
