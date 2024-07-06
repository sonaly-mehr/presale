import React from "react";
import progress from "../../../../assets/images/progress.png";

const StageOne = () => {
  return (
    <div className="bg-primary border-[2px] border-solid border-white rounded-xl px-3 lg:px-6 pt-4 lg:pt-7 pb-4 lg:pb-8 text-center">
      <h2 className="text-dark font-sequel100Wide95 text-[34.44px] lg:text-[46.57px]">
        STAGE ONE
      </h2>
      <h4 className="text-dark text-[15.66px] lg:text-[21.17px] font-sequel100Wide75 mt-[-5px] lg:mt-[-10px]">
        SELLING FAST!
      </h4>
      <span className="text-dark text-[11.69px] lg:text-[15.8px] flex justify-center mt-4 lg:mt-5 gap-1">
        <h6 className="font-sequel100Wide95">RAISED: $700,000</h6> <span className="font-sequel100Wide65">OF $1,000,000</span>
        
      </span>
      {/* PROGRESS-BAR */}
      <div className="mt-4 relative">
        <div className="overflow-hidden rounded-full border-[2px] border-solid border-black">
          <div
            className={`h-[24px] lg:h-[30px] rounded-full bg-no-repeat bg-center bg-cover -ml-[1px] -mt-[1px] lg:mt-0`}
            style={{ width: "75%", backgroundImage: `url(${progress})` }}
          />
        </div>
        <h5 className="font-sequel100Wide95 text-[13.78px] lg:text-[18.63px] text-white uppercase absolute left-4 top-1/2 -translate-y-1/2">
          75% SOLD
        </h5>
      </div>
      <div className="flex lg:hidden justify-between items-center text-[#006734] font-sequel100Wide95 text-[10.31px] capitalize mt-5 mb-2">
        <span>Current Price: $0,01</span>
        <span>Next Price: $0,015</span>
      </div>
      <h6 className="bg-secondary rounded-xl lg:rounded-xl py-3 lg:py-4 w-full text-[7.58px] lg:text-[10.24px] text-white font-sequel100Wide95 lg:mt-7">
        <span className="text-primary">75,000.000</span> TOKENS SOLD! ONLY{" "}
        <span className="text-primary">75,000.000</span> REMAIN
      </h6>
      <div className="flex gap-3 mt-2 font-sequel100Wide95 text-[12.4px] lg:text-[16.76px]">
        <button className="flex-1 rounded-[8px] lg:rounded-xl border border-solid border-black py-2 lg:py-3 text-black  text-center w-full">
          ETH
        </button>
        <button className="flex-1 rounded-[8px] lg:rounded-xl bg-secondary py-2 lg:py-3 text-white text-center w-full">
          USDT
        </button>
        <button className="flex-1 rounded-[8px] lg:rounded-xl border border-solid border-black py-2 lg:py-3 text-black text-center w-full">
          BASE
        </button>
      </div>
      <div className="flex gap-2 lg:gap-3 my-2">
        <div className="flex-1 relative text-[10.33px] lg:text-[13.97px] font-sequel100Wide45">
          <input
            type="text"
            placeholder="0"
            className="bg-white rounded-[8px] lg:rounded-xl placeholder:text-[#B4C8B9] pl-3 lg:pl-4 pr-10 lg:pr-6 py-2.5 lg:py-[15px] w-full"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4C8B9] uppercase block ">
            ETH
          </span>
        </div>
        <div className="flex-1 relative text-[10.33px] lg:text-[13.97px] font-sequel100Wide45">
          <input
            type="text"
            placeholder="0"
            className="bg-white rounded-[8px] lg:rounded-xl placeholder:text-[#B4C8B9] pl-3 lg:pl-4 pr-10 lg:pr-6 py-2.5 lg:py-[15px] w-full"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4C8B9] uppercase block">
            ETH
          </span>
        </div>
      </div>
      <div>
        <button className="text-primary bg-black font-sequel100Wide95 text-[16.53px] lg:text-[22.35px] uppercase w-full py-1.5 lg:py-2 rounded-[8px] lg:rounded-xl">
          BUY NOW
        </button>
      </div>
      <a
        href="#"
        className="text-[15px] font-sequel100Wide95 text-black mt-4 underline hidden lg:inline-block"
      >
        Win $PRIZE’S with our TG Game
      </a>
      <a href="#" className="block lg:hidden text-[11.02px] font-sequel100Wide95 text-black mt-4 underline">Earn more $PRIZES</a>
    </div>
  );
};

export default StageOne;
