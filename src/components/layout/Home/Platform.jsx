import React from "react";
import symbol from "../../../assets/images/symbol.svg";
import laptop from "../../../assets/images/laptop.svg";
import Button from "../../ui/Button";
import phone from "../../../assets/images/phone.png";

const Platform = () => {
  return (
    <div
      // className="bg-cover bg-no-repeat bg-center pb-20 "
      // style={{ backgroundImage: `url(${symbol})` }}
      className="relative"
    >
      <div className="container mx-auto">
        <div className="lg:w-[80%] mx-auto">
          <div className="text-center pt-10 lg:pt-20 pb-3 lg:pb-6">
            <h2 className="heading">777BTC PLATFORM</h2>
            <div className="bg-[#1D1D1D] md:bg-opacity-0 px-4 md:px-6 pt-10 md:pt-14 lg:px-0 lg:pt-0 rounded-[20px] md:rounded-none mt-8 md:mt-0 relative md:static h-[650px] md:h-auto ">
              <h5 className="text-white text-[22px] leading-[25px] lg:text-3xl lg:leading-[30px] lg:mt-16 mb-9 lg:mb-7 font-sequel100Wide75">
                Welcome to 777BTC.IO - Your Ticket to Crypto Wealth!
              </h5>
              <p className="text-white text-sm lg:text-[22px] leading-[20px] lg:leading-[30px] font-sequel100Wide45">
                Get ready for an electrifying journey into the world of crypto
                excitement! At 777BTC, we're more than just a competition site -
                we're your gateway to thrilling giveaways and exhilarating
                opportunities.
              </p>

              <img
                src={phone}
                alt=""
                className="block md:hidden w-auto h-[350px] md:h-auto absolute bottom-0 left-1/2 translate-x-[-50%]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img src={laptop} alt="" className="hidden md:block w-full h-auto" />
          <p className="text-white text-sm lg:text-[22px] leading-[20px] lg:leading-[30px] font-sequel100Wide45 text-center lg:w-[90%] mx-auto py-6">
            Imagine this: with every ticket you purchase, you're not just
            playing a game - you're entering a realm where fortunes are won and
            futures are rewritten in the blink of an eye. Our platform hosts a
            variety of crypto giveaways, ranging from Bitcoin, Ethereum, NFT’s,
            and beyond. Each giveaway presents a chance to win substantial
            amounts of cryptocurrency, putting you on the fast track to
            financial freedom. <br /> <br />
            So why wait? Join the crypto revolution and embark on an adventure
            with 777BTC. Take a chance, seize the opportunity, and let the
            excitement unfold. Your crypto fortune is just a click away. Play
            now and make your dreams a reality!
          </p>
          <div className="pt-14 pb-16 lg:w-[90%] mx-auto hidden lg:block">
            <Button text="PLAY NOW" bgColor="bg-secondary" />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center lg:absolute left-0 top-[-200px] right-0 z-[-1] mix-blend-overlay">
        <img src={symbol} alt="" className=" w-auto h-auto " />
      </div>
    </div>
  );
};

export default Platform;
