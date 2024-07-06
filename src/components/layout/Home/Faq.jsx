import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FAQS } from "../../../constants";

const Faq = () => {
  return (
    <div className="container mx-auto pt-10 lg:pt-24 pb-14">
      <h2 className="heading mb-10 lg:mb-16 text-center">FAQS</h2>
      <ul className="flex flex-col gap-4">
        {FAQS.map((faq) => (
          <Disclosure
            as="div"
            key={faq.heading}
            className="border-[2px] border-solid border-primary rounded-[32px] lg:rounded-[45px]"
          >
            {({ open }) => (
              <>
                <dt>
                  <DisclosureButton className="w-full">
                    <li className=" text-left text-[11px] lg:text-[24.82px] leading-[12.98px] lg:leading-none font-sequel100Wide65 text-[#1A1A1A] bg-primary rounded-[45px] pl-10 lg:pl-20 pr-5 py-4 lg:py-5 w-full relative">
                      <span className="bg-[#1A1A1A] rounded-full w-[7px] lg:w-2 h-[7px] lg:h-2 absolute left-5 lg:left-8 top-1/2 -translate-y-1/2"></span>
                      {faq?.heading}
                    </li>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel
                  as="dd"
                  className="py-4 lg:py-10 px-4 lg:px-12"
                >
                  <p className="text-[11px] lg:text-lg text-white font-sequel100Wide45">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
