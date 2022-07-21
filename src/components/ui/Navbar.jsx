import React, { useState } from "react";
import {HiViewList} from "react-icons/hi"
import {RiCloseFill} from "react-icons/ri"

const Navbar = () => {
  const [isVisible,setIsVisible]=useState(false)

  return <nav className={`transition-all ease-in-out duration-300 ${isVisible? "h-screen" :"h-16"} flex flex-col md:flex-row py-7 px-8 bg-black text-white font-bold justify-center md:leading-normal leading-9 md:justify-between text-lg items-center `}>
    <ul className={`md:flex ${!isVisible? "hidden" :""}`}>
      <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">О нас</li>
      <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Дисциплины</li>
      <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Педагоги</li>
      <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Контакты</li>
    </ul>
    <span className={`${!isVisible? "hidden" :""} pt-2 md:pt-0 md:block font-normal text-xl md:text-2xl`}>+7 999 999 99 99</span>

    {
      !isVisible?
      <HiViewList onClick={()=>setIsVisible(!isVisible)} className={`text-2xl cursor-pointer md:hidden absolute top-5 right-6`}
      
      />
      :<RiCloseFill onClick={()=>setIsVisible(!isVisible)} className={`cursor-pointer md:hidden absolute top-5 text-2xl right-6`}/>
    }
    
  </nav>;
};

export default Navbar;
