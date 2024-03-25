import Link from "next/link";
import Image from "next/image";
import React from "react";

function Insight() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto mt-24 sm:mt-[200px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[40px] font-semibold">Selected Works</p>
          </div>
          <div>
            <Link
              href={""}
              className="hidden sm:block px-10 py-3 border border-black rounded-full"
            >
              View All Works
            </Link>
          </div>
        </div>
        <div className="mt-16 mb-16">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 01 */}
            <div>
              <div className="p-6 bg-slate-300 rounded-xl">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711292668/PlusPlusStudio/Screenshot_2024-03-24_220347_wqirst.png"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex justify-between items-center my-4">
                <p className="text-2xl font-semibold">Template 01</p>
                <Link
                  href={""}
                  className="px-6 py-2 border border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            {/* 02 */}
            <div>
              <div className="p-6 bg-slate-300 rounded-xl">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711292668/PlusPlusStudio/Screenshot_2024-03-24_220347_wqirst.png"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex justify-between items-center my-4">
                <p className="text-2xl font-semibold">Template 02</p>
                <Link
                  href={""}
                  className="px-6 py-2 border border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            {/* 03 */}
            <div>
              <div className="p-6 bg-slate-300 rounded-xl">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711292668/PlusPlusStudio/Screenshot_2024-03-24_220347_wqirst.png"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex justify-between items-center my-4">
                <p className="text-2xl font-semibold">Template 03</p>
                <Link
                  href={""}
                  className="px-6 py-2 border border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            {/* 04 */}
            <div>
              <div className="p-6 bg-slate-300 rounded-xl">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dgnmqbglc/image/upload/v1711292668/PlusPlusStudio/Screenshot_2024-03-24_220347_wqirst.png"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
              <div className="flex justify-between items-center my-4">
                <p className="text-2xl font-semibold">Template 04</p>
                <Link
                  href={""}
                  className="px-6 py-2 border border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insight;
