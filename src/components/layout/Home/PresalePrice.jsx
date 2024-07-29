import React from "react";
import coin1 from "../../../assets/images/coin1.jpg";
import coin2 from "../../../assets/images/coin2.jpg";
import Button from "../../ui/Button";
import chartBg from "../../../assets/images/chart.png";
import pieChart from "../../../assets/images/pieChart.png";
import { PRICING, TOKENOMICS } from "../../../constants";
import chartBgMobile from "../../../assets/images/chart-mobile.png";
import lock from "../../../assets/images/lock.png";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };
  let day = formatTime(days);
  let hour = formatTime(hours);
  let minute = formatTime(minutes);

  return (
    <div className="flex gap-1.5 lg:gap-6 mt-0 lg:mt-4 mb-1 lg:mb-0">
      <div className="flex-1">
        <div>
          <div className="flex gap-1.5 lg:gap-4 items-center mb-[-5px] lg:mb-0">
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {day.charAt(0)}
            </span>
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {day.charAt(1)}
            </span>
            <div className="flex flex-col gap-1 lg:gap-2 items-center pl-0 lg:pl-2">
              <span className="block bg-white w-1 lg:w-3 h-1 lg:h-[10px]"></span>
              <span className="block bg-white w-1 lg:w-3 h-1 lg:h-[10px]"></span>
            </div>
          </div>
          <span className="text-white font-montBlancSemiBold text-[6.89px] lg:text-[24.72px] inline-block lg:mt-2">
            DAYS
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <div className="flex gap-1.5 lg:gap-4 items-center mb-[-5px] lg:mb-0">
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {hour.charAt(0)}
            </span>
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {hour.charAt(1)}
            </span>
            <div className="flex flex-col gap-1 lg:gap-2 items-center pl-0 lg:pl-2">
              <span className="block bg-white w-1 lg:w-3 h-1 lg:h-[10px]"></span>
              <span className="block bg-white w-1 lg:w-3 h-1 lg:h-[10px]"></span>
            </div>
          </div>
          <span className="text-white font-montBlancSemiBold text-[6.89px] lg:text-[24.72px] inline-block lg:mt-2">
            HOURS
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <div className="flex gap-1.5 lg:gap-4 items-center mb-[-5px] lg:mb-0">
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {minute.charAt(0)}
            </span>
            <span className="flex justify-center bg-white py-1 lg:py-1.5 w-full rounded-[10px] font-montBlancBlack text-[14.7px] lg:text-[52.71px] text-[#2E2122]">
              {minute.charAt(1)}
            </span>
          </div>
          <span className="text-white font-montBlancSemiBold text-[6.89px] lg:text-[24.72px] inline-block lg:mt-2">
            MINS
          </span>
        </div>
      </div>
    </div>
  );
}

const PresalePrice = () => {
  const time = new Date();
  time.setHours(time.getHours() + 600);
  return (
    <div className="container mx-auto">
      <div className="bg-[#1B1B1B] rounded-[20px] py-8 xl:py-20 px-4 xl:px-24">
        <h2 className="heading mb-10 lg:mb-12 text-center lg:text-left">
          PRESALE $PRIZE’S
        </h2>
        <div className="flex flex-col lg:flex-row bg-darkGray rounded-[10px] items-center h-auto lg:h-[240px] mb-5 ">
          <div className="flex-1 px-6 lg:px-[43px] py-8 lg:py-0">
            <h5 className="text-[22.17px] lg:text-[40px] leading-[16.62px] lg:leading-[30px] font-sequel100Wide75 text-primary uppercase mb-5 lg:mb-6 text-center lg:text-left">
              WIN A BITCOIN
            </h5>
            <p className="text-[10px] lg:text-[19px] text-white leading-[14px] lg:leading-[26px] font-sequel100Wide55 text-center lg:text-left">
              777BTC is giving presale holders free entry tickets to win 1
              BITCOIN! The more tokens you hold the more free entries you get.
              The best odds on the market of winning 1 BTC!
            </p>
          </div>
          <div class="lg:flex-1 h-full">
            <img
              src={coin1}
              alt=""
              className="object-cover w-full h-full rounded-[5px] lg:rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row bg-darkGray rounded-[10px] items-center lg:h-[240px]">
          <div className="flex-1 h-full">
            <img
              src={coin2}
              alt=""
              className="object-cover w-full h-full rounded-[5px] lg:rounded-[10px]"
            />
          </div>
          <div className="lg:flex-1 px-6 lg:px-[43px] py-8 lg:py-0">
            <h5 className="text-[22.17px] lg:text-[40px] leading-[16.62px] lg:leading-[30px] font-sequel100Wide75 text-primary uppercase mb-5 lg:mb-6 text-center lg:text-left">
              DAILY WINS!
            </h5>
            <p className="text-[10px] lg:text-[19px] text-white leading-[14px] lg:leading-[26px]  font-sequel100Wide55 text-center lg:text-left">
              Each day we will be giving away crypto prizes to the holders that
              have purchased before the daily timer is out. Get your presale
              tokens now for free entry!
            </p>
          </div>
          {/* p-[45px] */}
        </div>
        <div className="my-4 lg:my-6">
          <Button text="BUY NOW" bgColor="bg-white" link="/price" />
        </div>

        {/* COUNTDOW */}
        <div className="bg-darkGray rounded-[10px] px-2 lg:px-10 py-1 lg:py-4">
          <h2 className="font-sequel100Wide95 leading-[35.4px] lg:leading-normal text-white text-[11.15px] lg:text-[40px]">
            TIME UNTIL NEXT GIVEAWAY
          </h2>
          <MyTimer expiryTimestamp={time} />
        </div>

        {/* More INFO */}
        <div className="mt-6">
          <Button
            text="MORE INFO"
            bgColor="bg-primary"
            link="https://777btc.gitbook.io/777btc-whitepaper/"
          />
        </div>
      </div>

      {/* TokenoMics */}
      <div className="relative top-[-45px] z-[-1]">
        <div className="bg-[#BE0072] rounded-[20px] py-20 pl-4 lg:pl-24 relative overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:flex-1">
              <h2 className="heading text-left absolute lg:static top-[80px] left-1/2 -translate-x-1/2 lg:translate-x-0">
                {/* top-[-330px] xl:top-0 */}
                TOKENOMICS
              </h2>
              <h4 className="hidden lg:block text-[35px] font-sequel100Wide75 text-white uppercase mt-[-12px]">
                10 MILLION $PRIZE TOKENS
              </h4>
              <ul className="flex flex-col gap-6 mt-20 lg:mt-12 justify-center">
                {TOKENOMICS?.map((token) => (
                  <li className="flex gap-6 lg:gap-10 items-center relative">
                    <span
                      className={`w-[15px] h-[15px] lg:w-6 lg:h-6 rounded-full ${
                        token?.tokenColor === "yellow" && "bg-primary"
                      } ${token?.tokenColor === "gray" && "bg-[#DFDFDF]"} ${
                        token?.tokenColor === "black" && "bg-[#1A1A1A]"
                      } ${token?.tokenColor === "pink" && "bg-[#D33C8C]"} ${
                        token?.tokenColor === "darkGray" && "bg-[#4D4D4D]"
                      } ${token?.tokenColor === "white" && "bg-white"} ${
                        token?.tokenColor === "lightBlue" && "bg-[#A2D1FC]"
                      }`}
                    ></span>
                    <div className="flex flex-col text-white text-[14.39px] lg:text-[22px] leading-[19.62px] lg:leading-[30px]">
                      <h6 className="font-sequel100Wide85">{token?.token}</h6>
                      <p className="font-sequel100Wide45">{token?.number}</p>
                    </div>
                    <div
                      className={`${
                        token?.tokenColor === "darkGray" ? "block" : "hidden"
                      } absolute left-[-25px] lg:left-[-50px] top-0`}
                    >
                      <img
                        src={lock}
                        alt=""
                        className="w-[17px] lg:w-[27px] h-[27px] lg:h-[42px]"
                      />
                    </div>
                    <div
                      className={`${
                        token?.tokenColor === "white" ? "block" : "hidden"
                      } absolute left-[-25px] lg:left-[-50px] top-0`}
                    >
                      <img
                        src={lock}
                        alt=""
                        className="w-[17px] lg:w-[27px] h-[27px] lg:h-[42px]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:flex-1">
              <img
                src={pieChart}
                alt=""
                className="w-full h-auto relative right-auto lg:right-[50px] top-[80px] lg:top-[-130px] xl:top-[-80px] 2xl:top-[20px]"
              />
            </div>
          </div>

          <div className="hidden lg:block absolute top-[65px] md:top-[85px] right-[-20px] md:right-[-40px] bottom-0 mix-blend-luminosity overflow-hidden rounded-[20px]">
            <img
              src={chartBg}
              alt=""
              className="w-auto h-auto rounded-[20px]"
            />
          </div>
          <div className="block lg:hidden absolute top-[65px] md:top-[85px] right-0 left-3 bottom-0 w-full h-full mix-blend-luminosity overflow-hidden rounded-[20px]">
            <img
              src={chartBgMobile}
              alt=""
              className="w-full h-auto block lg:hidden mx-auto"
            />
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="relative top-[-70px] z-[-2]">
        <div className="bg-dark rounded-[20px] pt-20 lg:pt-20 pb-8 px-4 lg:px-16 grid grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-y-7 gap-x-4 lg:gap-x-8">
          {PRICING?.map((pricing, index) => (
            <div key={index}>
              <h5 className="text-white font-sequel100Wide75 text-[8.16px] lg:text-xl text-center py-1.5 lg:py-3.5 rounded-full border border-solid border-primary">
                {pricing}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresalePrice;
