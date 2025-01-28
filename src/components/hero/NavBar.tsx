import React from "react";

const NavBar = () => {
  return (
    <section>
      <div className="w-[966px] h-[72px] pl-4 pr-2 py-2 bg-[#232323] rounded-[44px] justify-between items-center inline-flex">
        <div className="w-32 h-[27.23px] relative">
          <div className="opacity-80 w-[27.24px] h-[27.23px] left-[0.02px] top-0 absolute"></div>
        </div>
        <div className="px-8 py-3 rounded-[66px] shadow-[1px_2px_13px_0px_rgba(49,54,68,0.04)] justify-center items-start gap-8 flex">
          <div className="w-[43px] flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-neutral-100 text-base font-normal font-['Avenir'] leading-7">
              Home
            </div>
          </div>
          <div className="text-center text-neutral-100 text-base font-normal font-['Avenir'] leading-7">
            About
          </div>
          <div className="text-center text-neutral-100 text-base font-normal font-['Avenir'] leading-7">
            Blog
          </div>
          <div className="text-center text-neutral-100 text-base font-normal font-['Avenir'] leading-7">
            Support
          </div>
        </div>
        <div className="px-6 py-4 bg-[#afe274] rounded-[33px] shadow-[inset_0px_4px_0px_0px_rgba(149,178,113,0.25),inset_0px_-4px_0px_0px_rgba(148,197,87,0.55)] border border-[#a3c47d] justify-center items-center gap-3 flex">
          <div className="text-[#232323] text-base font-medium font-['Avenir']">
            Download app
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 relative" />
            <div className="w-[15px] h-[0px] origin-top-left rotate-90 border border-[#474646]"></div>
            <div className="w-5 h-5 px-[1.46px] flex-col justify-center items-center inline-flex" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
