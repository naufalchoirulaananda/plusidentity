import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <header className="h-[120px] mx-6 sm:mx-[100px] flex justify-between items-center">
        <div className="">
          <p className="text-[#B6BCC6] text-[21px] font-semibold">plus<span className="text-black">identity.</span></p>
        </div>
        <div className="flex gap-6">
          <Link
            href={""}
            className="hidden sm:block px-10 py-3 border border-black rounded-full justify-center items-center font-medium"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href={""}
            className="px-10 py-3 border border-black rounded-full justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
