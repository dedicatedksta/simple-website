import React, { useState } from "react";
import {RiCloseFill} from "react-icons/ri"
import { motion,AnimatePresence } from "framer-motion";

const Backdrop = ({children,close,visibility}) => {
  

  if (visibility){
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft 
    window.onscroll=()=>{
      window.scrollTo(LeftScroll, TopScroll);
      }
    }
  else {
    window.onscroll = function() {};
  }

  return <AnimatePresence>
    {visibility &&
      (<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close} className={`${visibility? "flex":"hidden"} inset-0  justify-center items-center h-screen w-screen backdrop-brightness-[0.25] fixed`}>
        <div className=" absolute top-3 right-0 md:top-3 md:right-3 ">
          <RiCloseFill className="cursor-pointer  text-4xl text-white"/>
        </div>
        {children}
      </motion.div>)
    }
  </AnimatePresence>;
};

export default Backdrop;
