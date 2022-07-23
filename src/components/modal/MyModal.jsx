import React, { useState } from "react";
import Backdrop from "./Backdrop";
import 'react-phone-number-input/style.css'
import FormLayout from "../ui/FormLayout";

const MyModal = ({form,card,close,visibility}) => {

  return <Backdrop close={close} visibility={visibility}>
    {
      !form?
        <div onClick={(e)=>e.stopPropagation()} className="z-20 max-w-sm md:max-w-lg bg-white box-content py-6 px-4 md:py-10 md:px-8">
        <h1 className="text-4xl  font-bold mb-6">{card.title}</h1>
        <span  className="text-lg whitespace-pre-wrap text-gray-600 h-80 w-80">{card.fullDescription}</span>
      </div>
      :
      <FormLayout popup={true}/>
        
    }
    
  </Backdrop>
};

export default MyModal;
