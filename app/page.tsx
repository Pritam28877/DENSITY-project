"use client";
import React from "react";
import Head from "@/components/Head";
import Contain1 from "@/components/Contain1";
import Contain2 from "@/components/Contain2";
import Contain3 from "@/components/Contain3";
import Contain4 from "@/components/Contain4";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-screen h-full flex overflow-x-scroll snap-type-x mandatory">
        <Element className="w-screen h-screen snap-center" name="head">
          <Head />
        </Element>
        <Element className="w-screen h-screen snap-center" name="contain1">
          <Contain1 />
        </Element>
        <Element className="w-screen h-screen snap-center" name="contain2">
          <Contain2 />
        </Element>
        <Element className="w-screen h-screen snap-center" name="contain3">
          <Contain3 />
        </Element>
        <div className="absolute w-[calc(100%_-_470px)] top-[1691px] right-[235px] left-[235px] flex flex-row py-0 px-16 box-border items-center justify-center gap-[48px]">
          <div className="w-[480px] overflow-hidden shrink-0 flex flex-col items-center justify-center max-w-[480px]">
            <img
              className="relative w-[480px] h-[511px] overflow-hidden shrink-0"
              alt=""
              src="/Image_4_e526a1f1bc.svg.png"
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
      </div>
    </div>
  );
}
