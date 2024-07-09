import React, { useState } from "react";
import { PiShareNetwork } from "react-icons/pi";
import { MENU } from "../../constants";
import logo from "../../assets/images/logo.svg";
import flag from "../../assets/images/flag.svg";
import { IoMdMenu } from "react-icons/io";
import { BiSolidLeftArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import tokenLogo from "../../assets/images/777_TokenLogo_nnav.png";
import tokenLogoMobile from "../../assets/images/tokenLogoMobile.png";

const Navbar = () => {
  const [connect, setConnect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#181818] lg:bg-opacity-0 py-[17px] lg:py-0 fixed lg:static top-0 left-0 right-0 z-[100]">
      <div className="lg:mt-10 container mx-auto">
        <div className="lg:bg-[#181818] rounded-[50px] lg:p-3 flex justify-between items-center">
          <div>
            <img
              src={logo}
              alt=""
              className="w-[180px] h-[45px] lg:w-[200px] lg:h-[45px] xl:w-[250px] xl:h-[50px] 2xl:w-[330px] 2xl:h-[72px]"
            />
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-3 xl:gap-9">
              {MENU?.map((item) => (
                <li>
                  <a
                    href={item?.link}
                    className={`uppercase text-xs xl:text-sm 2xl:text-base ${
                      item?.class
                        ? "font-sequel100Wide85 text-primary"
                        : "font-sequel100Wide45 text-white"
                    } not-italic`}
                  >
                    {item?.menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HAMBURGER MENU */}
          <div>
            {showMenu ? (
              <RxCross2
                className="block lg:hidden text-primary text-3xl cursor-pointer"
                onClick={handleNav}
              />
            ) : (
              <IoMdMenu
                className="block lg:hidden text-white text-4xl cursor-pointer"
                onClick={handleNav}
              />
            )}
          </div>

          <div className="hidden lg:flex gap-3 items-center">
            <button
              onClick={() => setConnect(!connect)}
              className={`bg-primary rounded-[40px] ${
                connect
                  ? "px-4 py-1.5 xl:px-8 xl:py-2.5"
                  : "px-5 xl:px-10 py-3 xl:py-[18px]"
              } text-black text-[12.75px] font-sequel100Wide95 relative`}
            >
              {connect ? (
                <span className="flex flex-col">
                  <span className="text-xs xl:text-[16.86px] pb-1 border-b border-solid border-black block ">
                    CONNECTED
                  </span>
                  <span className="font-sequel100Wide45 text-[xs] xl:text-sm uppercase block pt-1">
                    SHOW BALANCE
                  </span>
                </span>
              ) : (
                <span>
                  CONNECT <br /> WALLET
                </span>
              )}

              {/* Connected Wallet */}

              {connect && (
                <div className="absolute top-[80px] xl:top-[120px] left-[-80px] right-0 w-[360px] bg-white rounded-[10px] z-40">
                  <div className="bg-primary rounded-ss-[10px] rounded-se-[10px] rounded-es-[15px] rounded-ee-[15px] w-full py-[22px] text-center">
                    <span className="font-montBlancSemiBold text-lg text-black">
                      0x7a1BcA9C3a1BB5aa9204…A47E
                    </span>
                  </div>
                  <div className="px-8 py-[22px]">
                    <span className="block text-left font-sequel100Wide65 text-sm text-black uppercase mb-2">
                      Balance
                    </span>
                    <div className="flex justify-between text-black font-sequel100Wide95 text-lg uppercase">
                      <h5 className="">$PRIZE</h5>
                      <h5>9,999.999</h5>
                    </div>
                    <button className="w-full mt-4 mb-6 text-white bg-secondary rounded-[10px] font-sequel100Wide95 text-lg uppercase py-2 text-center">
                      BUY $PRIZE
                    </button>
                    <div className="flex justify-between items-center pb-3">
                      <div className="flex gap-2.5 items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <h6 className="text-black text-xs font-sequel100Wide95 capitalize">
                          Base Network
                        </h6>
                      </div>
                      <span
                        onClick={() => setConnect(!connect)}
                        className="text-xs underline text-black font-montBlancLight"
                      >
                        Disconnect
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </button>

            <PiShareNetwork className="text-white border border-solid border-white rounded-full w-[50px] xl:w-[77px] h-[50px] xl:h-[77px] p-2 xl:p-5" />
            <div className="w-[50px] xl:w-[77px] h-[50px] xl:h-[77px] rounded-full border border-solid border-primary p-2.5 flex justify-center items-center">
              <img
                src={flag}
                alt=""
                className="w-[35px] xl:w-[52px] h-[35px] xl:h-[52px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="relative z-[200]">
        <div
          className={
            showMenu
              ? "md:hidden fixed left-0 top-[80px] w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              showMenu
                ? " md:hidden fixed top-[80px] left-0 right-0 w-full h-auto bg-[#2E2E2E] pt-6 ease-in duration-500"
                : "md:hidden fixed top-[-100%] left-0 p-10 ease-in duration-500 w-full h-screen"
            }
          >
            <ul className="flex flex-col gap-4 pl-6 pr-6">
              <li className="flex justify-between items-center">
                <a
                  href="https://777btc.gitbook.io/777btc-whitepaper/"
                  target="_blank"
                  className="text-primary uppercase text-sm font-sequel100Wide95"
                >
                  WHITEPAPER
                </a>
                <BiSolidLeftArrow className="text-primary" />
              </li>
              <li>
                <a
                  href="#"
                  className="text-white uppercase text-sm font-sequel100Wide45"
                >
                  $PRIZE’S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white uppercase text-sm font-sequel100Wide45"
                >
                  PRESS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white uppercase text-sm font-sequel100Wide45"
                >
                  PLAY NOW
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white uppercase text-sm font-sequel100Wide45"
                >
                  FAQs
                </a>
              </li>
            </ul>

            <div
              className={`bg-primary py-3 w-full mt-6 ${
                !showWallet && "rounded-es-[20px] rounded-ee-[20px"
              }] relative`}
            >
              <h4
                className="text-[17px] uppercase font-sequel100Wide95 text-black text-center cursor-pointer"
                onClick={() => setShowWallet(!showWallet)}
              >
                {showWallet ? "MY WALLET" : "CONNECT WALLET"}
              </h4>

              <div
                className={
                  showWallet
                    ? " absolute top-[49px] left-0 right-0 w-full h-auto bg-[#2E2E2E]  ease-in duration-500"
                    : "fixed top-[-100%] left-0 p-10 ease-in duration-500 w-full h-screen"
                }
              >
                <div className="rounded-ss-[33px] rounded-se-[33px] bg-[#3B3B3B] pt-3 m-5 mr-5">
                  <img
                    src={tokenLogoMobile}
                    alt=""
                    className="w-[150px] h-[150px] mx-auto"
                  />
                  <div className="w-full bg-white rounded-[10px] mt-3">
                    <div className="bg-primary rounded-ss-[10px] rounded-se-[10px] rounded-es-[15px] rounded-ee-[15px] w-full py-4 text-center">
                      <span className="font-montBlancSemiBold text-base text-black">
                        0x7a1BcA9C3a1BB5aa9204…A47E
                      </span>
                    </div>
                    <div className="px-7 py-5">
                      <span className="block text-left font-sequel100Wide65 text-[11px] text-black uppercase mb-2">
                        Balance
                      </span>
                      <div className="flex justify-between text-black font-sequel100Wide95 text-sm uppercase">
                        <h5 className="">$PRIZE</h5>
                        <h5>9,999.999</h5>
                      </div>
                      <button className="w-full mt-4 mb-3 text-white bg-secondary rounded-[10px] font-sequel100Wide95 text-[13px] uppercase py-2 text-center">
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
                <div className="bg-secondary py-3 w-full mt-0 rounded-es-[20px] rounded-ee-[20px]">
                  <h4
                    className="text-[17px] uppercase font-sequel100Wide95 text-black text-center cursor-pointer"
                    onClick={() => setShowWallet(!showWallet)}
                  >
                    DISCONNECT
                  </h4>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[57px] right-0 w-[280px]">
              <img
                src={tokenLogo}
                alt=""
                className="w-auto h-auto mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
