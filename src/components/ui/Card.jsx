import React, { useState } from "react";
import { motion } from "framer-motion"
import MyModal from "../modal/MyModal";

const Card = ({card}) => {
  const [isVisibleModal,setIsVisibleModal]=useState(false)
  // console.log(card)
  const open=()=>setIsVisibleModal(true)
  const close=()=>setIsVisibleModal(false)

  return <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={` max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex md:flex-row ${!card.reverse? "md:flex-row-reverse" :""} flex-col py-20`}>
    <img className="flex-1 md:h-[480px] md:w-[360px] lg:h-[640px] xl:h-[769px] object-cover lg:w-[448px] xl:w-[560px]" src={card.img} alt="" />
    <div className={`flex flex-1 pt-6 md:pt-0 flex-col justify-center items-center ${!card.reverse? "md:pr-14" :"md:pl-14"}  text-center`}>
      <h1 className="text-2xl md:text-2xl font-bold mb-6">{card.title}</h1>
      <span className="text-base md:text-base text-gray-600">{card.description}</span>
      <button
      onClick={open}
      className="mt-8 box-content border-2 border-black bg-black text-white w-24 mx-auto rounded-3xl lg:py-4 lg:px-11 md:py-3 md:px-8 py-2 px-6 hover:bg-white hover:text-black">Подробнее</button>
      <MyModal form={false} card={card} close={close} visibility={isVisibleModal}/>
    </div>
  </motion.div>;
};

export default Card;
