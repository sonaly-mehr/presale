import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import press1 from "../../../assets/images/press1.jpg";
import press2 from "../../../assets/images/press2.jpg";
import press3 from "../../../assets/images/press3.jpg";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import mobilePress1 from "../../../assets/images/press_mobile1.png";
import mobilePress2 from "../../../assets/images/press_mobile2.png";
import mobilePress3 from "../../../assets/images/press_mobile3.png";

const Press = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-14 mt-24 lg:mt-14">
        <h2 className="text-center heading mb-6 lg:mb-10">PRESS</h2>
        <div className="flex flex-col gap-10">
          <div className="rounded-[20px] overflow-hidden relative w-full">
            <img
              src={press1}
              alt=""
              className="w-full h-auto lg:h-[780px] rounded-[20px] hidden lg:block"
            />
            <img
              src={mobilePress1}
              alt=""
              className="w-full h-auto rounded-[20px] block lg:hidden"
            />
            <div className="absolute press-content left-0 bottom-0 w-screen">
              <div className="relative z-4 left-5 lg:left-10 bottom-5 lg:bottom-10">
                <img
                  src={logo1}
                  alt=""
                  className="relative left-[-10px] lg:left-[-15px] w-[90px] lg:w-auto h-auto"
                />
                <h2 className="font-sequel100Wide95 leading-[35.4px] lg:leading-normal text-white uppercase text-[18.46px] lg:text-[50px] mb-[-10px] lg:mb-0 mt-[-5px] lg:mt-0">
                  ARTICLE HEADLINE
                </h2>
                <span className="text-[11px] lg:text-[30px] font-sequel100Wide45 text-white capitalize inline-block">
                  Article Date 00/00/00
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] overflow-hidden relative w-full">
            <img
              src={press2}
              alt=""
              className="w-full h-auto lg:h-[780px] rounded-[20px] hidden lg:block"
            />
            <img
              src={mobilePress2}
              alt=""
              className="w-full h-auto rounded-[20px] block lg:hidden"
            />
            <div className="absolute press-content left-0 bottom-0 w-screen">
              <div className="relative z-4 left-5 lg:left-10 bottom-5 lg:bottom-10">
                <img
                  src={logo2}
                  alt=""
                  className="relative left-[-10px] lg:left-[-15px] w-[90px] lg:w-auto h-auto"
                />
                <h2 className="font-sequel100Wide95 leading-[35.4px] lg:leading-normal text-white uppercase text-[18.46px] lg:text-[50px] mb-[-10px] lg:mb-0 mt-[-5px] lg:mt-0">
                  ARTICLE HEADLINE
                </h2>
                <span className="text-[11px] lg:text-[30px] font-sequel100Wide45 text-white capitalize inline-block">
                  Article Date 00/00/00
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] overflow-hidden relative w-full">
            <img
              src={press3}
              alt=""
              className="w-full h-auto lg:h-[780px] rounded-[20px] hidden lg:block"
            />
            <img
              src={mobilePress3}
              alt=""
              className="w-full h-auto rounded-[20px] block lg:hidden"
            />
            <div className="absolute press-content left-0 bottom-0 w-screen">
              <div className="relative z-4 left-5 lg:left-10 bottom-5 lg:bottom-10">
                <img
                  src={logo3}
                  alt=""
                  className="relative left-[-10px] lg:left-[-15px] w-[90px] lg:w-auto h-auto"
                />
                <h2 className="font-sequel100Wide95 leading-[35.4px] lg:leading-normal text-white uppercase text-[18.46px] lg:text-[50px] mb-[-10px] lg:mb-0 mt-[-5px] lg:mt-0">
                  ARTICLE HEADLINE
                </h2>
                <span className="text-[11px] lg:text-[30px] font-sequel100Wide45 text-white capitalize inline-block">
                  Article Date 00/00/00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;
