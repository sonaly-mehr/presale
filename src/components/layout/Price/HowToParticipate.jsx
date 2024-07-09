import React from "react";
import { PARTICIPATE } from "../../../constants";
import Button from "../../ui/Button";
import logoToken from "../../../assets/images/777_TokenLogo_3.png";

const HowToParticipate = () => {
  return (
    <div className="container mx-auto">
      <h2 className="heading text-center mt-12 mb-10">How to Participate </h2>
      <div className="flex flex-col gap-6">
        {PARTICIPATE?.map((item, index) => (
          <div className="flex gap-5 lg:gap-14 items-center border-[1.5px] border-solid border-white rounded-full w-full py-3 lg:py-6 px-4 lg:px-14">
            <span className="relative font-sequel100Wide95 text-[35px] lg:text-[67px] text-secondary">
              {index + 1}{" "}
              <span className="w-2 lg:w-5 h-2 lg:h-4 bg-secondary absolute bottom-[13px] lg:bottom-[25px] right-[-10px] lg:right-[-23px]"></span>
            </span>
            <p className="text-[12px] lg:text-[25px] text-white leading-[15.7px] lg:leading-[30px] font-sequel100Wide45">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-16 pb-8 lg:pb-10 relative">
        <h5 className="font-sequel100Wide65 text-[20px] lg:text-[35px] uppercase text-center text-white">
          How many free entries will i get?
        </h5>
        <h2 className="font-sequel100Wide95 text-[26.42px] lg:text-[50px] text-primary leading-[30px] lg:leading-[55px] uppercase text-center mt-6 lg:mt-20 mb-6 lg:w-[80%] mx-auto">
          1 free entry every $100 spent in presale
        </h2>
        <span className="text-primary text-[18px] lg:text-[25px] font-sequel100Wide55 uppercase block text-center">
          $PRIZE has a $3,000,000 hard cap
        </span>
        <div className="border border-solid border-primary mt-10 lg:mt-[90px] lg:w-[60%] m-auto rounded-[20px] lg:rounded-[30px]">
          <div className="bg-primary rounded-ss-[20px] lg:rounded-ss-[30px] rounded-se-[20px] lg:rounded-se-[30px] py-2 lg:py-10 text-center">
            <h3 className="text-[17px] lg:text-[41px] font-sequel100Wide95 leading-[57px] uppercase">
              WHAT ARE THE ODDS?
            </h3>
          </div>
          <ul className="my-8 lg:my-14 text-base lg:text-[31px] font-sequel100Wide55 uppercase flex flex-col gap-5 lg:gap-10 justify-center w-full text-white text-center">
            <li>$100 tokens 1/30,000 odds</li>
            <li>$1000 tokens 1/3000 odds</li>
            <li>$5000 tokens 1/600 odds</li>
            <li>$10,000 tokens 1/300 odds</li>
            <li>$50,000 tokens 1/60 odds</li>
          </ul>
        </div>

        <div className="lg:w-[90%] m-auto">
          <h5 className="font-sequel100Wide95 text-base lg:text-[28px] leading-[24px] lg:leading-[39px] text-white text-center w-[90%] mx-auto mt-10 lg:mt-16 mb-5 lg:mb-10">
            Don’t miss your chance to win big. Get your $PRIZE tokens now and
            enter the most exciting crypto giveaway around. The next 1 BTC
            winner could be you!
          </h5>
          <p className="font-sequel100Wide45 text-xs lg:text-xl leading-[18px] lg:leading-[35px] text-white text-center w-full lg:w-[85%] mx-auto">
            Disclaimer: for this prize to activate the presale raise has to
            reach the softcap. Upon hitting the softcap 1BTC will be transferred
            to a public wallet for all to see.
          </p>
          <div className="my-10 lg:my-16">
            <Button text="BUY NOW" bgColor="bg-primary" />
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 ">
          <img
            src={logoToken}
            alt=""
            className="w-auto h-auto mix-blend-overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToParticipate;
