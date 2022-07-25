import React, { useState } from "react";
import {HiViewList} from "react-icons/hi"
import {RiCloseFill} from "react-icons/ri"
import {BsChevronUp} from "react-icons/bs"
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [isVisible,setIsVisible]=useState(false)

  return <nav id="home" className={`transition-all ease-in-out duration-300 ${isVisible? "h-screen" :"h-14"} flex flex-col md:flex-row md:py-10 px-8 bg-black text-white font-bold justify-center md:leading-normal leading-9 md:justify-between lg:text-base xl:text-lg md:text-sm items-center `}>
    <ul className={`md:flex ${!isVisible? "hidden" :""}`}>
      <HashLink to="#about" smooth> <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">О нас</li></HashLink>
      <HashLink to="#disciplines" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Дисциплины</li></HashLink>
      <HashLink to="#coaches" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Педагоги</li></HashLink>
      <HashLink to="#contacts" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Контакты</li></HashLink>
    </ul>
    <span className={`${!isVisible? "hidden" :""} pt-2 md:pt-0 md:block md:absolute right-8 font-normal text-xl md:text-lg lg:text-xl xl:text-2xl`}>+7 999 999 99 99</span>

    {
      !isVisible?
      <HiViewList onClick={()=>setIsVisible(!isVisible)} className={`text-2xl cursor-pointer md:hidden absolute top-3 right-6`}
      
      />
      :<RiCloseFill onClick={()=>setIsVisible(!isVisible)} className={`cursor-pointer md:hidden absolute top-3 text-2xl right-6`}/>
    }
    <HashLink to="#home" smooth><button className=" z-40 fixed bottom-3 right-3 md:bottom-6 md:right-6 bg-white hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300 p-2 text-xl md:p-3 text-black  rounded-full md:text-2xl" style={{boxShadow: '6px 6px 12px 2px rgba(0, 0, 0, 0.2)'}} >
      <BsChevronUp />
    </button></HashLink>
  </nav>;
};

export default Navbar;
