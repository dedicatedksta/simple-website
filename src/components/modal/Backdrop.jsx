import React, { useState } from "react";
import {RiCloseFill} from "react-icons/ri"
import { motion,AnimatePresence } from "framer-motion";

const Backdrop = ({children,close,visibility}) => {
  

  if (visibility)document.querySelector('body').classList.add('stop-scrolling')
  else document.querySelector('body').classList.remove('stop-scrolling')

  return <AnimatePresence>
    {visibility &&
      (<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close} className={`${visibility? "flex":"hidden"} inset-0  justify-center items-center h-screen w-screen backdrop-brightness-[0.25] fixed`}>
        <RiCloseFill className="cursor-pointer absolute md:top-6 top-4 right-3 md:right-10 text-4xl text-white"/>
        {children}
      </motion.div>)
    }
  </AnimatePresence>;
};

export default Backdrop;
