import React, { useState } from "react";
import { motion } from "framer-motion"
import MyModal from "../modal/MyModal";

const About = () => {
  const [isVisibleModal,setIsVisibleModal]=useState(false)
  const open=()=>setIsVisibleModal(true)
  const close=()=>setIsVisibleModal(false)

  return <motion.div id="about"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="flex flex-col text-center mx-auto max-w-[340px] md:max-w-2xl my-32 md:my-36 overflow-scroll ">
    <h2 className="text-2xl md:text-4xl font-bold mb-8">О студии</h2>
    <div className="text-lg md:text-lg text-gray-600">Мы готовы громко заявить о тебе, чтобы о твоих успехах, в качестве модели, узнал весь мир. <br /> <br /> На базе моделинга благодаря молодым, креативным, энергичным специалистам ты будешь расти и развиваться, реализовывать свой потенциал и творить вместе с нами, совершенствоваться и покорять новые вершины.</div>
    <button onClick={open} className="mt-8 box-content border-2 border-black bg-black text-white w-24 mx-auto rounded-3xl md:py-4 md:px-11 py-3 px-6 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">Записаться</button>
    <MyModal form={true} card={null} close={close} visibility={isVisibleModal}/>
  </motion.div>;
};

export default About;
