import React from "react";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Downlode() {
  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full h-screen  text-white px-16 pt-20 mb-32"
    >
      <h1 className="text-xl text-right">Materials</h1>
      <div className="mt-8 h-[80vh] w-full flex items-center justify-center gap-8 px-16">
        <div className="w-[35%] h-full rounded-xl overflow-hidden">
          <Link to={"/class11"} className="w-full mb-4 relative group">
            <h2 className="text-3xl group-hover:text-gray-900 w-[80%] font-extrabold text-white tracking-tighter ease-in duration-300 cursor-pointer">
              {" "}
              Click here to download{" "}
              <span className="text-orange-600">Class 11th </span> Study
              Material
            </h2>
            <div className="size-6 grid place-content-center group-hover:scale-150 bg-orange-600 rounded-full absolute right-[10%] top-[50%] -translate-y-[50%] ease-in duration-300 cursor-pointer">
              <span className="text-sm text-black font-bold">
                <FaDownload />
              </span>
            </div>
          </Link>
          {/* <img
            data-scroll
            data-scroll-section
            data-scroll-speed="0.1"
            className="h-full w-full object-cover object-center  rounded-xl "
            src="src/assets/images/homibhabha8.webp"
            alt=""
          /> */}
          <div data-scroll data-scroll-section data-scroll-speed="0.1" className="h-full w-full rounded-xl bg-photograph1 bg-center bg-cover"></div>
        </div>
        <div className="w-[35%] h-full rounded-xl overflow-hidden flex flex-col items-center justify-between">
          {/* <img
            data-scroll
            data-scroll-section
            data-scroll-speed="0.1"
            className="h-[85%] w-full object-cover object-top rounded-xl  "
            src="src/assets/images/Indian-physicist-CV-Raman-1930.webp"
            alt=""
          /> */}
          <div data-scroll data-scroll-section data-scroll-speed="0.1" className="h-[85%] w-full rounded-xl bg-photograph2 bg-top bg-cover"></div>
          <Link to={"/class12"} className="w-full mb-4 relative group ">
            <h2 className="text-3xl group-hover:text-gray-600 w-[80%] font-extrabold text-white tracking-tighter ease-in duration-300 cursor-pointer">
              {" "}
              Click here to download{" "}
              <span className="text-orange-600">Class 12th </span> Study
              Material
            </h2>
            <div className="size-6 grid place-content-center group-hover:scale-150 bg-orange-600 rounded-full absolute right-[10%] top-[50%] -translate-y-[50%] ease-in duration-300 cursor-pointer">
              <span className="text-sm text-black font-bold">
                <FaDownload />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Downlode;
