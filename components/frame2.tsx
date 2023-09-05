import type { NextPage } from "next";

const Frame3: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-row py-0 pr-[195.969970703125px] pl-[195.97999572753906px] box-border items-center justify-center gap-[48px] text-left text-8xl text-gray-300 font-inter">
      <div className="flex flex-col items-start justify-center gap-[24px] z-[1]">
        <div className="flex flex-col py-0 pr-[2.04998779296875px] pl-0 items-start justify-start">
          <div className="relative leading-[38px] font-medium">
            Explore 40+ science proven techniques.
          </div>
        </div>
        <div className="flex flex-col py-0 pr-[92.04998779296875px] pl-0 items-start justify-start opacity-[0.6] text-2xl text-gray-100">
          <div className="relative leading-[28px]">
            Find the techniques that work best for you!
          </div>
        </div>
      </div>
      <div className="w-[480px] overflow-hidden shrink-0 flex flex-col items-center justify-center max-w-[480px] z-[0]">
        <img
          className="relative w-[480px] h-[511px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/image-3-387b57044fsvg1@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame3;
