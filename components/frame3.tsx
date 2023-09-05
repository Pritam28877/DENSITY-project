import type { NextPage } from "next";

const Frame1: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-row py-0 px-16 box-border items-center justify-center gap-[48px] text-left text-8xl text-gray-300 font-inter">
      <div className="w-[480px] overflow-hidden shrink-0 flex flex-col items-center justify-center max-w-[480px]">
        <img
          className="relative w-[480px] h-[511px] overflow-hidden shrink-0"
          alt=""
          src="/image-2-b3667ac3fdsvg.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[24px]">
        <div className="flex flex-col py-0 pr-[130px] pl-0 items-start justify-start">
          <div className="relative leading-[38px] font-medium">
            Understand the WHY behind your emotions better.
          </div>
        </div>
        <div className="flex flex-col py-0 pr-[86px] pl-0 items-start justify-start opacity-[0.6] text-2xl text-gray-100">
          <div className="relative leading-[28px]">
            <p className="m-0">
              Understand your behavioural patterns and learn to spot your
              emotions
            </p>
            <p className="m-0">before they take control.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
