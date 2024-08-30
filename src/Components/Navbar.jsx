import React, { useState } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  const [val, setVal] = useState("true");

  const toggleMenu = () => {
    setVal(!val);
  };

  return (
    <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:mt-5">
        <div className="flex justify-between items-center relative">
        <div className="lg:w-[10vw]">
          <h3>Rya miskov</h3>
        </div>
        <div onClick={toggleMenu} className="text-xl lg:hidden">
          <CiMenuBurger />
        </div>
      </div>

      <div
        id="menu"
        className={`${
          val ? "hidden" : "block"
        } w-full h-full bg-white z-10 absolute top-0 left-0 px-10 py-7 lg:bg-inherit lg:static lg:flex lg:items-center lg:justify-between lg:px-0 lg:py-0`}
      >
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <div className="icon text-lg">
              <IoRemoveOutline />
            </div>
            <div>
              <h3 className="text-sm">Visual & prodcut designer</h3>
              <h3 className="text-sm">based in Estoria</h3>
            </div>
          </div>
          <div onClick={toggleMenu} className="text-xl lg:hidden">
            <IoMdClose />
          </div>
        </div>
        <div className="w-full  text-center mt-14 lg:w-[30vw] lg:mt-0 lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="mb-5">
            <a className="text-sm font-semibold" href="">
              Work
            </a>
          </div>
          <div className="mb-5">
            <a className="text-sm font-semibold" href="">
              About
            </a>
          </div>
          <div className="mb-5">
            <a className="text-sm font-semibold" href="">
              Store
              <sup className="bg-yellow-200 text-orange-500 font-semibold text-[10px] p-0.5 rounded-md">
                New
              </sup>
            </a>
          </div>
          <div className="mb-5">
            <a className="text-sm font-semibold" href="">
              Let's chat <span className="inline-block"><LuArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
