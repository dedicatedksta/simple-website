import React from "react";
import map from "../../assets/map/map.png"
import {FaTelegram,FaTwitterSquare} from "react-icons/fa"

const Map = () => {
  return <div id="contacts" className="mt-40 relative">
    <img src={map} className="w-screen h-[500px] object-cover"  alt="" />
    <div className="absolute bg-white top-[15%] left-[10%] md:top-[20%] md:left-[25%] max-w-2xl p-12 ">
      <h1 className="mb-8 text-2xl font-bold">Контакты</h1>
      <div className="flex flex-col leading-6   ">
        <span>+7 999 999 99 99</span>
        <span>hello@yogastudio.com</span>
        <span>Привольная ул., 2, стр. 1, Москва</span>
        <span className="mt-8">Занятия по выходным</span>
      </div>
      <div className="text-3xl flex items-center mt-8 gap-2">
        <FaTelegram className="cursor-pointer" />
        <FaTwitterSquare className="cursor-pointer"/>
      </div>
    </div>
  </div>;
};

export default Map;
