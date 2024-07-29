import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const HowToBuy = () => {
  return (
    <div className="container mx-auto lg:py-[75px]">
      <h2 className="heading mb-14 text-center">HOW TO BUY</h2>
      <div className="border-[2px] border-solid border-primary rounded-[19px] lg:rounded-[30px]">
        <div className="bg-primary flex gap-6 items-center rounded-[30px] px-3 lg:px-7 py-1.5 lg:py-4 -mx-[1.8px]">
          <IoMdArrowDropdown className="text-[#1A1A1A] text-base lg:text-[40px]" />
          <h5 className="font-sequel100Wide65 text-2xl text-[#1A1A1A] hidden md:block">
            Step by Step written walkthrough on how to buy $PRIZE tokens.
          </h5>
          <h5 className="font-sequel100Wide65 text-[15px] text-[#1A1A1A] block md:hidden">
            How To Buy Guide
          </h5>
        </div>

        <div className="pl-6 lg:pl-28 pr-6 lg:pr-16 py-6 lg:py-14 text-white flex flex-col gap-8 text-[14px] lg:text-[22px]">
          <p className="font-sequel100Wide45">
            $PRIZE can be purchased using BASE, ETH or USDT. Ensure you have a
            sufficient amount of BASE, ETH OR USDT in your wallet before proceeding. {" "}
          </p>
          <div>
            <h5 className="font-sequel100Wide95 uppercase">
              CONNECT YOUR WALLET{" "}
            </h5>
            <p className="font-sequel100Wide45">
              First, ensure you have a $PRIZE-supported wallet set up. We
              recommend Metamask for desktop and Trust Wallet for mobile. Click
              “Connect Wallet” to allow 777BTC to interact with your wallet.
            </p>
          </div>
          <div>
            <h5 className="font-sequel100Wide95 uppercase">BUY $PRIZE</h5>
            <p className="font-sequel100Wide45">
              After you successfully connect your wallet, you can buy $PRIZE
              tokens. Choose the amount of $PRIZE tokens you wish to purchase
              and click “Buy”. {" "}
            </p>
          </div>
          <div>
            <h5 className="font-sequel100Wide95 uppercase">
              {" "}
              CLAIM YOUR TOKENS
            </h5>
            <p className="font-sequel100Wide45">
              $PRIZE tokens can be claimed at the end of the presale. Specific
              details will be released closer to the time. Once the presale
              period has concluded, visit the main site and click “Claim”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
