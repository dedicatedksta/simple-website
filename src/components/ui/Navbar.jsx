import React, { useState } from "react";
import {HiViewList} from "react-icons/hi"
import {RiCloseFill} from "react-icons/ri"
import {BsChevronUp} from "react-icons/bs"
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [isVisible,setIsVisible]=useState(false)

  return <nav id="home" className={`transition-all ease-in-out duration-300 ${isVisible? "h-screen" :"h-12"} flex flex-col md:flex-row md:py-10 px-8 bg-black text-white font-bold justify-center md:leading-normal leading-9 md:justify-between text-lg items-center `}>
    <ul className={`md:flex ${!isVisible? "hidden" :""}`}>
      <HashLink to="#about" smooth> <li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">О нас</li></HashLink>
      <HashLink to="#disciplines" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Дисциплины</li></HashLink>
      <HashLink to="#coaches" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Педагоги</li></HashLink>
      <HashLink to="#contacts" smooth><li className="px-3 cursor-pointer transition-all ease-in-out duration-300 hover:text-slate-300">Контакты</li></HashLink>
    </ul>
    <span className={`${!isVisible? "hidden" :""} pt-2 md:pt-0 md:block md:absolute right-8 font-normal text-xl md:text-2xl`}>+7 999 999 99 99</span>

    {
      !isVisible?
      <HiViewList onClick={()=>setIsVisible(!isVisible)} className={`text-2xl cursor-pointer md:hidden absolute top-3 right-6`}
      
      />
      :<RiCloseFill onClick={()=>setIsVisible(!isVisible)} className={`cursor-pointer md:hidden absolute top-3 text-2xl right-6`}/>
    }
    <HashLink to="#home" smooth><button className="fixed bottom-4 right-4 bg-black p-2 text-xl md:p-3 text-white rounded-full md:text-2xl" >
      <BsChevronUp />
    </button></HashLink>
  </nav>;
};

export default Navbar;
