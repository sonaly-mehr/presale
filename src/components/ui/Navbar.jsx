import React, { useState } from "react";
import { PiShareNetwork } from "react-icons/pi";
import { MENU } from "../../constants";
import logo from "../../assets/images/logo.svg";
import flag from "../../assets/images/flag.svg";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [connect, setConnect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSOcialIcon, setShowSocialicon] = useState(false)

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#181818] lg:bg-opacity-0 py-[17px] lg:py-0 ">
      {/* fixed lg:static top-0 left-0 right-0 z-[100] */}
      <div className="lg:mt-10 container mx-auto">
        <div className="lg:bg-[#181818] rounded-[50px] lg:p-3 flex justify-between items-center">
          <a href="/">
            <img
              src={logo}
              alt=""
              className="w-[180px] h-[45px] lg:w-[200px] lg:h-[45px] xl:w-[250px] xl:h-[50px] 2xl:w-[330px] 2xl:h-[72px]"
            />
          </a>
          <div>
            <ul className={`hidden lg:flex items-center gap-3 ${connect? 'xl:gap-6': 'xl:gap-9'} pl-0 lg:pl-[10px] xl:pl-[6px]`}>
              {MENU?.map((item) => (
                <li>
                  <NavLink
                    to={item?.link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-sequel100Wide85 text-primary"
                          : "font-sequel100Wide45 text-white"
                      } uppercase text-xs xl:text-sm 2xl:text-base hover:text-primary transition duration-500 ease-in-out
                    `
                    }
                  >
                    {item?.menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* HAMBURGER MENU */}
          <div className="">
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
              } text-black text-[11px] 2xl:text-[12.75px] font-sequel100Wide95 relative`}
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
                <div className="absolute top-[80px] xl:top-[108px] left-[-80px] right-0 w-[360px] bg-white rounded-[10px] z-40">
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
            <div className="bg-white w-[19px] h-[19px] rounded-full flex justify-center items-center">
              <MdKeyboardArrowDown className="text-secondary"/>
            </div>
            <PiShareNetwork className="text-white border border-solid border-white rounded-full w-[50px] 2xl:w-[77px] h-[50px] 2xl:h-[77px] p-2 2xl:p-5" />
            <div className="relative w-[52px] 2xl:w-[78px] mx-auto" onClick={()=> setShowSocialicon(!showSOcialIcon)}>
            <div className={`ease-in duration-500 shadow-[2px_4px_12.1px_0px_rgba(0,0,0,0.45)] absolute top-[-25px] 2xl:top-[-38px] bg-[#181818] ${showSOcialIcon ? 'h-[260px]' : 'xl:h-[50px] 2xl:h-[77px]'} cursor-pointer flex flex-col items-center gap-6 z-50 justify-center border border-solid border-white rounded-full w-[50px] 2xl:w-[77px] p-2 lg:p-[0.4rem] 2xl:p-5`}>
            <FaTelegramPlane className={`transition duration-150 ease-in-out text-white text-3xl lg:text-4xl ${showSOcialIcon && 'hover:text-secondary'}`} />
            {
              showSOcialIcon && 
            <div className="flex flex-col gap-6 items-center">
            <IoLogoYoutube className="text-white text-3xl lg:text-4xl transition duration-150 ease-in-out hover:text-secondary" />
            <FaXTwitter className="text-white text-3xl lg:text-4xl transition duration-150 ease-in-out hover:text-secondary" />
            <FaDiscord className="text-white text-3xl lg:text-4xl transition duration-150 ease-in-out hover:text-secondary" />
            </div>
                        }
            </div>
            </div>
            <div className="w-[50px] 2xl:w-[77px] h-[50px] 2xl:h-[77px] rounded-full border border-solid border-primary p-2.5 flex justify-center items-center">
              <img
                src={flag}
                alt=""
                className="w-[35px] 2xl:w-[52px] h-[35px] 2xl:h-[52px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNav
        showMenu={showMenu}
        showWallet={showWallet}
        setShowWallet={setShowWallet}
        handleNav={handleNav}
      />
    </nav>
  );
};

export default Navbar;
