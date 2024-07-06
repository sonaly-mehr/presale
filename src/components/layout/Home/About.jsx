import React from "react";
import cryptoBg from "../../../assets/images/crypto-bg.jpg";
import { ABOUT_LISTS } from "../../../constants";
import listDisc from "../../../assets/images/listDisc.svg";
import Button from "../../ui/Button";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-black lg:bg-dark rounded-[20px] h-auto lg:rounded-3xl">
        <div className="text-center h-auto bg-dark lg:bg-black px-4 py-8 lg:py-16 rounded-[20px] lg:rounded-3xl relative lg:static z-[10]">
          <h2 className="heading pb-6">ABOUT</h2>
          <p className="font-sequel100Wide45 text-base lg:text-[22px] leading-[20px] lg:leading-[30px] text-white lg:w-[70%] m-auto">
            777BTC introduces $PRIZE coin, the dynamic token fuelling the
            ultimate crypto giveaway experience! Designed for thrill-seekers and
            crypto enthusiasts, 777BTC and $PRIZE is your gateway to exciting
            giveaway opportunities and big wins.
          </p>
        </div>

        <div
          className="bg-cover bg-center px-4 py-8 lg:pl-20 lg:pr-20 lg:py-24 rounded-[20px] lg:rounded-3xl  crypto-bg"
          // relative top-[-35px] z-[-1]
        >
          <div className="text-left">
            <h2 className="font-sequel100Wide95 text-[25px] lg:text-[50px] text-white mb-10 lg:mb-14 text-center lg:text-left pt-3 lg:pt-0">
              WHY 777BTC?
            </h2>
            <ul className="flex flex-col gap-4 md:gap-6 w-full md:w-[70%] xl:w-[55%]">
              {ABOUT_LISTS?.map((list) => (
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

            <div className="mt-[300px] lg:mt-24">
              <Button text="BUY NOW" bgColor="bg-primary" />
            </div>
            <p className="font-sequel100Wide65 text-[12px] lg:text-[22px] leading-4 lg:leading-[30px] text-primary text-center pt-10 lg:pt-14 lg:w-[85%] mx-auto">
              Join the Action Get your $PRIZE tokens, dive into our giveaways,
              and experience the future of crypto prize competitions. The
              excitement awaits!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
