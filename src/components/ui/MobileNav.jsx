import React, { useState } from "react";
import tokenLogo from "../../assets/images/777_TokenLogo_nnav.png";
import tokenLogoMobile from "../../assets/images/tokenLogoMobile.png";
import { BiSolidLeftArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileNav = ({ showMenu, handleNav, showWallet, setShowWallet }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      {/* Overlay */}
      <div className="relative z-[200]">
        <div
          className={
            showMenu
              ? "md:hidden absolute left-0 top-[7px] w-full h-[705rem] bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              showMenu
                ? " md:hidden absolute top-0 left-0 right-0 w-full h-auto bg-[#2E2E2E] pt-5 ease-in duration-500"
                : "md:hidden absolute top-[-1500px] p-10 left-0 right-0 ease-in duration-500 w-full h-auto"
            }
          >
            <div className="pl-8 pr-5 py-4">
            <ul className="flex flex-col gap-5">
              <li className="mobile-nav" onClick={handleNav}>
                <NavLink
                  to="https://777btc.gitbook.io/777btc-whitepaper/"
                  target="_blank"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-sequel100Wide85 text-primary"
                        : "font-sequel100Wide45 text-white"
                    } ppercase text-sm hover:text-primary transition duration-500 ease-in-out flex justify-between items-center
                    `
                  }
                >
                  WHITEPAPER
                  <BiSolidLeftArrow className="text-primary hover-icon opacity-0" />
                </NavLink>
              </li>
              <li className="mobile-nav" onClick={handleNav}>
                <NavLink
                  to="/price"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-sequel100Wide85 text-primary"
                        : "font-sequel100Wide45 text-white"
                    } uppercase text-sm hover:text-primary transition duration-500 ease-in-out flex justify-between items-center
                    `
                  }
                >
                  $PRIZE’S
                  <NavLink
                    to="/price"
                    className={({ isActive }) =>
                      `${isActive ? "!opacity-1" : "opacity-0"} hover-icon
                    `
                    }
                  >
                    <BiSolidLeftArrow className="text-primary " />
                  </NavLink>
                </NavLink>
              </li>
              <li className=" mobile-nav" onClick={handleNav}>
                <NavLink
                  to="/press"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-sequel100Wide85 text-primary"
                        : "font-sequel100Wide45 text-white"
                    } uppercase text-sm hover:text-primary transition duration-500 ease-in-out flex justify-between items-center
                    `
                  }
                >
                  PRESS
                  <NavLink
                    to="/press"
                    className={({ isActive }) =>
                      `${isActive ? "!opacity-1" : "opacity-0"} hover-icon
                    `
                    }
                  >
                    <BiSolidLeftArrow className="text-primary " />
                  </NavLink>
                </NavLink>
              </li>
              <li className="mobile-nav" onClick={handleNav}>
                <NavLink
                  to="/paly-now"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-sequel100Wide85 text-primary"
                        : "font-sequel100Wide45 text-white"
                    } uppercase text-sm hover:text-primary transition duration-500 ease-in-out flex justify-between items-center
                    `
                  }
                >
                  PLAY NOW
                  <NavLink
                    to="/play-now"
                    className={({ isActive }) =>
                      `${isActive ? "opacity-1" : "opacity-0"} hover-icon 
                    `
                    }
                  >
                    <BiSolidLeftArrow className=" text-primary" />
                  </NavLink>
                </NavLink>
              </li>

              <li
                className="flex justify-between items-center mobile-nav"
                onClick={handleNav}
              >
                <a
                  href="#faq"
                  className="text-white uppercase text-sm font-sequel100Wide45 hover:text-primary transition duration-500 ease-in-out"
                >
                  FAQs
                </a>
                <BiSolidLeftArrow className="text-primary hover-icon opacity-0" />
              </li>
            </ul>

            {/* SOCIAL LINK */}
            <ul className="flex items-center gap-3.5 relative z-[100] mt-7">
              <li className="w-11 h-11 bg-secondary rounded-lg flex justify-center items-center"><a href="/" className=""><FaTelegramPlane className="text-white text-3xl"/></a></li>
              <li className="w-11 h-11 bg-secondary rounded-lg flex justify-center items-center"><a href="/" className=""><FaXTwitter className="text-white text-3xl"/></a></li>
              <li className="w-11 h-11 bg-secondary rounded-lg flex justify-center items-center"><a href="/" className=""><FaDiscord className="text-white text-3xl"/></a></li>
              <li className="w-11 h-11 bg-secondary rounded-lg flex justify-center items-center"><a href="/" className=""><IoLogoYoutube className="text-white text-3xl"/></a></li>
            </ul>
            </div>

            <div
              className={`bg-primary py-5 w-full mt-5 ${
                !showWallet && "rounded-es-[20px] rounded-ee-[20px"
              }] relative`}
            >
              <h4
                className="text-[15px] uppercase font-sequel100Wide95 text-black text-center cursor-pointer"
                onClick={() => setShowWallet(!showWallet)}
              >
                {showWallet ? "MY WALLET" : "CONNECT WALLET"}
              </h4>

              <div
                className={
                  showWallet
                    ? " absolute top-[63px] left-0 right-0 w-full h-auto bg-[#2E2E2E]  ease-in duration-500"
                    : "fixed top-[-100%] left-0 p-10 ease-in duration-500 w-full h-full"
                }
              >
                <div className="rounded-ss-[33px] rounded-se-[33px] bg-[#3B3B3B] m-6">
                  <div className="pt-8 pb-6">
                  <img
                    src={tokenLogoMobile}
                    alt=""
                    className="w-[200px] h-[200px] mx-auto"
                  />
                                    </div>
                  <div className="w-full bg-white rounded-[10px] mt-3">
                    <div className="bg-primary rounded-ss-[10px] rounded-se-[10px] rounded-es-[15px] rounded-ee-[15px] w-full py-4 text-center">
                      <span className="font-montBlancSemiBold text-base text-black">
                        0x7a1BcA9C3a1BB5aa9204…A47E
                      </span>
                    </div>
                    <div className="px-6 pt-5 pb-7">
                      <span className="block text-left font-sequel100Wide65 text-xs text-black uppercase mb-3">
                        Balance
                      </span>
                      <div className="flex justify-between text-black font-sequel100Wide95 text-base uppercase">
                        <h5 className="">$PRIZE</h5>
                        <h5>9,999.999</h5>
                      </div>
                      <button className="w-full mt-4 mb-6 text-white bg-secondary rounded-[10px] font-sequel100Wide95 text-[13px] uppercase py-2 text-center">
                        BUY $PRIZE
                      </button>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2.5 items-center">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <h6 className="text-black text-xs font-sequel100Wide95 capitalize">
                            Base Network
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary py-5 w-full mt-0 rounded-es-[20px] rounded-ee-[20px]">
                  <h4
                    className="text-[15px] uppercase font-sequel100Wide95 text-black text-center cursor-pointer"
                    onClick={() => setShowWallet(!showWallet)}
                  >
                    DISCONNECT
                  </h4>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[43px] right-0 w-[260px]">
              <img
                src={tokenLogo}
                alt=""
                className="w-auto h-auto mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
