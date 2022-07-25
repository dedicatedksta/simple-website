import React, { useState } from "react";
import Backdrop from "./Backdrop";
import 'react-phone-number-input/style.css'
import FormLayout from "../ui/FormLayout";

const MyModal = ({form,card,close,visibility}) => {

  return <Backdrop close={close} visibility={visibility}>
    {
      !form?
        <div onClick={(e)=>e.stopPropagation()} className="z-20 overflow-scroll max-h-[60%] max-w-[340px] md:max-w-lg bg-white box-content py-6 px-3 md:py-10 md:px-8">
        <h2 className="text-xl md:text-4xl mb-3  font-bold md:mb-6">{card.title}</h2>
        <span  className="text-sm md:text-lg whitespace-pre-wrap text-gray-600 md:h-80 md:w-80">{card.fullDescription}</span>
      </div>
      :
      <FormLayout popup={true}/>
        
    }
    
  </Backdrop>
};

export default MyModal;
