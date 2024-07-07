import React, { useState } from "react";
import { PiShareNetwork } from "react-icons/pi";
import { MENU } from "../../constants";
import logo from "../../assets/images/logo.svg";
import flag from "../../assets/images/flag.svg";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [connect, setConnect] = useState(false);

  return (
    <nav className="bg-[#181818] lg:bg-opacity-0 py-6 lg:py-0">
    <div className="lg:mt-10 container mx-auto">
      <div className="lg:bg-[#181818] rounded-[50px] lg:p-3 flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-[235px] h-[50px] lg:w-[330px] lg:h-[72px]" />
        </div>
        <div>
          <ul className="hidden lg:flex items-center gap-9">
            {MENU?.map((item) => (
              <li>
                <a
                  href={item?.link}
                  className={`uppercase text-base ${
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
          <IoMdMenu className="block lg:hidden text-white text-4xl"/>
        </div>


        <div className="hidden lg:flex gap-3 items-center">
          <button
            onClick={() => setConnect(!connect)}
            className={`bg-primary rounded-[40px] ${
              connect ? "px-8 py-2.5" : "px-10 py-[18px]"
            } text-black text-[12.75px] font-sequel100Wide95 relative`}
          >
            {connect ? (
              <span className="flex flex-col">
                <span className="text-[16.86px] pb-1 border-b border-solid border-black block ">
                  CONNECTED
                </span>
                <span className="font-sequel100Wide45 text-sm uppercase block pt-1">
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
              <div className="absolute top-[120px] left-[-80px] right-0 w-[360px] bg-white rounded-[10px] z-40">
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

          <PiShareNetwork className="text-white border border-solid border-white rounded-full w-[77px] h-[77px] p-5" />
          <div className="w-[77px] h-[77px] rounded-full border border-solid border-primary p-2.5 flex justify-center items-center">
            <img src={flag} alt="" className="w-[52px] h-[52px]" />
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
