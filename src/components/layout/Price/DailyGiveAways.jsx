import React from "react";
import cryptoBg from "../../../assets/images/coin2.jpg";
import coin5 from "../../../assets/images/coin5.png";
import Button from "../../ui/Button";

const DailyGiveAways = () => {
  return (
    <div className="container mx-auto mb-14 relative z-10">
      <div className="bg-dark lg:bg-dark rounded-[20px] h-auto lg:rounded-3xl mt-2">
        <div className="text-center h-auto bg-dark lg:bg-dark px-4 py-8 lg:py-16 rounded-[20px] lg:rounded-3xl relative lg:static z-[10]">
          <h2 className="heading pb-6">DAILY GIVEAWAYS!</h2>
          <p className="font-sequel100Wide45 text-base lg:text-[22px] leading-[20px] lg:leading-[30px] text-white lg:w-[80%] m-auto">
            Each day we will be giving away crypto prizes of $50-$1000 to the
            holders that have purchased before the daily timer is out. The prize
            amount will be announced once the timer ends and the draw will be
            posted on our socials the following day. The lucky winner will then
            be sent their tokens to the wallet address they used to enter the
            $PRIZE presale.  
          </p>
        </div>

        <div className="overflow-hidden relative z-10 rounded-[25px]">
          <img
            src={cryptoBg}
            alt=""
            className="hidden lg:block w-full h-auto rounded-[25px]"
          />
          <img
            src={coin5}
            alt=""
            className="block lg:hidden w-full h-auto rounded-[25px]"
          />
        </div>

        <div className="pt-0 pb-10 lg:pt-10 lg:pb-10 w-[90%] mx-auto lg:mb-0">
          <h3 className="text-primary font-sequel100Wide95 text-xl lg:text-[35px] uppercase text-center mb-5 lg:mb-10">
            Get your tokens now, it could be you!
          </h3>
          <Button bgColor="bg-primary" text="BUY NOW" />
        </div>
      </div>
    </div>
  );
};

export default DailyGiveAways;
