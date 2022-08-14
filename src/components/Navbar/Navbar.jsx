import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="w-1/1 bg-transparent">
        <div className=" w-[93%]  mx-auto text-white flex justify-between">
          <div className="flex text-center items-center flex-col md:flex-row">
            <img src="/logo.png" className=" w-14 md:w-20 invert " alt="t" />
            <h1 className=" text-sm  md:text-3xl font-bold font-serif">
              The Sweat Arena
            </h1>
          </div>
          <ul className="md:flex hidden text-center items-center gap-12">
            <li className="tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500">
              HOME
            </li>
            <li className="tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500">
              PAGES
            </li>
            <li className="tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500">
              PORTFOLIO
            </li>
            <li className="tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500">
              VLOG
            </li>
            <li className="tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500">
              SHOP
            </li>
          </ul>
          <div className="gap-4 md:gap-8 flex items-center md:mx-4">
            <button className="bg-white text-black py-2 font-bold px-5 border-2 rounded-full hover:bg-black hover:text-white tracking-wider cursor-pointer transition-all">
              Book Now
            </button>
            <span
              onClick={() => setMenu(true)}
              className="text-3xl px-2 py-1 border-2 rounded-full border-red-50 cursor-pointer"
            >
              <i class="uil  uil-bars"></i>
            </span>
          </div>
        </div>
      </nav>
      <div
        className={`fixed md:hidden duration-700 transition-all ${
          menu ? "right-0" : "-right-[100vw]"
        } bg-white/90 backdrop-blur-sm w-[80vw] rounded-l-3xl h-[100vh] z-50 top-0 `}
      >
        <div
          onClick={() => setMenu(false)}
          className=" bg-gray-300 shadow-lg p-3 text-2xl rounded-2xl absolute left-5 text-white top-5"
        >
          <GrClose style={{ color: "white" }} className=" text-white" />
        </div>
        <div
          onClick={() => setMenu(false)}
          className=" flex justify-center flex-col items-center h-full text-xl font-semibold space-y-3"
        >
          <div>Home</div>
          <div>About</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
