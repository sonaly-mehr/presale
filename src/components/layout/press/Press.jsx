import React from "react";
import press1 from "../../../assets/images/press1.jpg";
import press2 from "../../../assets/images/press2.jpg";
import press3 from "../../../assets/images/press3.jpg";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";

const Press = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-14 mt-10 lg:mt-14">
        <h2 className="text-center heading mb-6 lg:mb-10">PRESS</h2>
        <div className="flex flex-col gap-10">
          <div className="rounded-[20px] overflow-hidden relative w-full pb-[85%] md:pb-[70%] xl:pb-[55%]">
            <img
              src={press1}
              alt=""
              className="w-full h-full rounded-[20px] object-cover absolute top-0 object-bottom"
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

          <div className="rounded-[20px] overflow-hidden relative w-full pb-[85%] md:pb-[70%] xl:pb-[55%]">
            <img
              src={press2}
              alt=""
              className="w-full h-full rounded-[20px] object-cover absolute top-0 object-bottom"
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

          <div className="rounded-[20px] overflow-hidden relative w-full pb-[85%] md:pb-[70%] xl:pb-[55%]">
            <img
              src={press3}
              alt=""
              className="w-full h-full rounded-[20px] object-cover absolute top-0 object-bottom"
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
