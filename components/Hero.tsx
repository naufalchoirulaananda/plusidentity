import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto">
        <p className="text-[21px] font-medium mt-4 sm:mt-[64px]">
          Hello! I&apos;m Human.
        </p>
        <p className="text-6xl sm:text-8xl font-semibold mt-4 tracking-tight">
          Designing products that people like,{" "}
          <span className="text-[#B6BCC6]">hand made on earth by humans.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-14 sm:gap-0 justify-between items-center mt-16 sm:mt-24">
          <div>
            <Link
              href={""}
              className="px-[120px] sm:px-16 py-8 border border-black rounded-full bg-[#030712] text-white text-2xl font-medium"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div className="max-w-xl">
            <p className="text-xl">
              Combining various design skills to produce an effective website
              that suits your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
