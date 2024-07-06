import React from "react";
import featuredLogo from "../../../assets/images/Featuredin_Logos.svg";
import featuredLogoMobile from "../../../assets/images/featuredLogos_mobile.svg";
import tokenLogo from "../../../assets/images/777_TokenLogo2.png";
import tokenLogoMobile from "../../../assets/images/777_TokenLogo2_mobile.png";

const FeaturedIn = () => {
  return (
    <div className="container mx-auto px-5 pt-10 lg:pt-5 pb-12 relative">
      {/* <div className='bg-cover bg-center relative' style={{ backgroundImage: `url(${tokenLogo})` }}> */}
      <h2 className="heading mb-6 lg:mb-10 text-center">FEATURED IN</h2>
      <div className="flex justify-center">
        <img src={featuredLogo} alt="" className="hidden lg:block w-auto h-auto" />
        <img src={featuredLogoMobile} alt="" className="block lg:hidden w-full h-auto" />
      </div>
      {/* </div> */}
      <div className="flex justify-center absolute left-0 top-[-300px] md:top-[-50px] lg:top-[-550px] right-0 z-[-1] mix-blend-overlay tokenPosition">
        <img src={tokenLogo} alt="" className="hidden md:block w-full md:w-auto h-full md:h-auto " />
        <img src={tokenLogoMobile} alt="" className="block md:hidden w-full md:w-auto h-full md:h-auto"/>
      </div>
    </div>
  );
};

export default FeaturedIn;



