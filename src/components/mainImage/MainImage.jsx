import React from "react";
import mainImage from "../../assets/mainImage.jpg"
import {BsChevronDown} from "react-icons/bs"

const MainImage = () => {
  return <div className=" w-full relative flex justify-center items-center">
    <div className="absolute z-10 text-center text-white">
      <h1 className="text-3xl md:text-6xl my-4">Мы – супермодели!</h1>
      <h2 className="text-xl md:text-4xl my-4">В мир несем красоту!</h2>
      <span className="text-base md:text-xl my-8">Модельная студия создана специально для тебя</span>
    </div>
    <img className="   w-full brightness-[0.35]" src={mainImage} alt="" />
    <BsChevronDown className="z-10 animate-bounce absolute bottom-0 text-4xl" color="white" />
  </div>;
};

export default MainImage;
