import React from "react";

const Contain3 = () => {
  return (
    <div className="absolute w-[calc(100%_-_470px)] top-[1119px] right-[235px] left-[235px] flex flex-row py-0 px-16 box-border items-center justify-center gap-[48px]">
      <div className="flex flex-col items-start justify-center gap-[24px] z-[1]">
        <div className="flex flex-col py-0 pr-[140px] pl-0 items-start justify-start">
          <div className="relative leading-[38px] font-medium">
            <p className="m-0">
              Start your personalized journey built by behaviour
            </p>
            <p className="m-0">scientists.</p>
          </div>
        </div>
        <div className="flex flex-col py-0 pr-[67px] pl-0 items-start justify-start opacity-[0.6] text-2xl text-gray-100">
          <div className="relative leading-[28px]">
            <p className="m-0">
              Ahead is your new pocket coach - here for you 24/7 to help you
              manage
            </p>
            <p className="m-0">your emotions.</p>
          </div>
        </div>
      </div>
      <div className="w-[480px] overflow-hidden shrink-0 flex flex-col items-center justify-center max-w-[480px] z-[0]">
        <img
          className="relative w-[480px] h-[511px] overflow-hidden shrink-0"
          alt=""
          src="/image-1-8d38f94793svg.svg"
        />
      </div>
    </div>
  );
};

export default Contain3;
