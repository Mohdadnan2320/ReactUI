import React from "react";
import { GoArrowRight } from "react-icons/go";

const Cards = ({data}) => {
  const {image, title, description} = data;
  return (
      <div className='w-full mt-10  overflow-hidden lg:h-auto lg:w-2/5'>
        <div className="w-full h-60 lg:h-96">
          <img className="w-full h-full object-cover rounded-lg " src={image} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="opacity-60">{description}</p>
          </div>
          <div className="px-5 py-2 border-[1px] border-black rounded-full grid place-content-center hover:bg-[#001219] hover:cursor-pointer hover:text-white transition duration-300">
            <span>
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>
  );
};

export default Cards;
