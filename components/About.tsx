import React from "react";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto mt-24">
        <div>
          <p className="text-[70px] font-semibold leading-tight">
            A designer specializing in crafting digital experiences that evoke
            emotions.
          </p>
          <div className="flex justify-between items-center gap-[200px] mt-6">
            <p className="text-base">
              Direct your efforts towards expanding your business, while I take
              charge of effectively showcasing your business in the digital
              world, ensuring it stands out from competitors.
            </p>
            <div className="flex justify-end items-end gap-10">
                <Link href={""}>Instagram</Link>
                <Link href={""}>Email</Link>
                <Link href={""}>Telegram</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
