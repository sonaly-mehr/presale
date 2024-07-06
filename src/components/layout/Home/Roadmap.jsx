import React from "react";
import { ROAD_MAPS } from "../../../constants";
import TokenLogo from "../../../assets/images/777_TokenLogo.png";

const Roadmap = () => {
  return (
    <div className="container mx-auto pt-12 xl:pt-0">
      <h2 className="heading mb-8 xl:mb-16 text-center">ROADMAP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
        {ROAD_MAPS?.map((item, index) => (
          <div
            className={`${
              item?.bg === "black" ? "bg-black" : "bg-[#3E3E3E]"
            } rounded-[26px] xl:rounded-[45px] pt-8 xl:pt-16 pb-8 xl:pb-20 pl-24 xl:pl-[162px] pr-8 xl:pr-24 relative`}
            key={index}
          >
            <h4 className="text-white font-sequel100Wide85 text-[22.21px] xl:text-[38.77px] leading-[25.91px] xl:leading-[45px] mb-8 xl:mb-14">
              {item?.heading}
            </h4>
            <ul className="flex flex-col gap-4 xl:gap-8">
              {item?.contents?.map((content, index) => (
                <li className="text-white list-disc text-[11.46px] xl:text-xl font-sequel100Wide45 leading-[15.97px] xl:leading-[28px] pl-1">
                  {content}
                </li>
              ))}
            </ul>
            <div
              className={`${
                item?.bg === "black" ? "bg-primary" : "bg-secondary"
              } w-[50px] xl:w-[90px] h-full absolute left-0 top-0 bottom-0 rounded-[26px] xl:rounded-[45px]`}
            >
              <h4 className="text-[21.3px] xl:text-[37.17px] font-sequel100Wide95 leading-[18.64px] xl:leading-[32.5px] text-black rotate-[-90deg] w-[145px] xl:w-[230px] absolute top-1/2 -translate-y-1/2 left-[-50px] xl:left-[-75px]">
                {item?.phase}
              </h4>
            </div>
            <div className="absolute right-0 bottom-0 overflow-hidden rounded-[26px] xl:rounded-[45px]">
              <img
                src={TokenLogo}
                alt=""
                className="w-[300px] xl:w-auto h-[300px] xl:h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
