import React, { useState } from "react";
import {RiCloseFill} from "react-icons/ri"
import { motion,AnimatePresence } from "framer-motion";

const Backdrop = ({children,close,visibility}) => {
  

  // if (visibility){
  //   let TopScroll = window.pageYOffset || document.documentElement.scrollTop
  //   let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft 
  //   window.onscroll=()=>{
  //     window.scrollTo(LeftScroll, TopScroll);
  //     }
  //   }
  // else {
  //   window.onscroll = function() {};
  // }

  return <AnimatePresence>
    {visibility &&
      (<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close} className={`${visibility? "flex":"hidden"} inset-0 flex-col justify-center items-center h-screen w-screen backdrop-brightness-[0.25] fixed`}>
        <div className="self-end px-3">
          <RiCloseFill className="cursor-pointer self-end text-4xl text-white"/>
        </div>
        {children}
      </motion.div>)
    }
  </AnimatePresence>;
};

export default Backdrop;
