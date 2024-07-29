import React from "react";

const Button = ({ text, link, bgColor }) => {
  return (
    <a
      href={link ? link : '#'}
      className={`${bgColor} block w-full rounded-full font-sequel100Wide75 text-xl lg:text-[35px] lg:leading-[48.6px] text-[#1E1E1E] uppercase text-center py-2.5 lg:py-6`}
    >
      {text}
    </a>
  );
};

export default Button;
