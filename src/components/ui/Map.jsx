import React from "react";
import map from "../../assets/map/map.png"
import vk from "../../assets/contacts/vk.svg"
import telegram from "../../assets/contacts/telegram.svg"

const Map = () => {
  return <div id="contacts" className="mt-40 relative flex flex-col-reverse md:block">
    <img src={map} className="w-screen h-[500px] object-cover"  alt="" />
    <div className="md:absolute bg-white top-[15%] left-[10%] md:left-0 lg:top-[20%] lg:left-[10%] xl:left-[15%] md:max-w-xs lg:max-w-2xl 2xl:left-[25%] p-12 ">
      <h1 className="mb-8 text-2xl font-bold">Контакты</h1>
      <div className="flex flex-col leading-6   ">
        <span>+7 999 999 99 99</span>
        <span>hello@yogastudio.com</span>
        <span>Привольная ул., 2, стр. 1, Москва</span>
        <span className="mt-8">Занятия по выходным</span>
      </div>
      <div className="text-3xl flex items-center gap-2">
       <a href="https://vk.com/studiosupermodels" target="_blank"> <img className="cursor-pointer" src={vk} alt="vk" /></a>
       <a href="https://t.me/an_lyu" target="_blank"> <img className="cursor-pointer" src={telegram} alt="telegram" /></a>
      </div>
    </div>
  </div>;
};

export default Map;
