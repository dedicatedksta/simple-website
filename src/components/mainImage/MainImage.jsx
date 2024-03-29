import React from "react";
import mainImage from "../../assets/mainImage.jpg"
import {BsChevronDown} from "react-icons/bs"
import { motion } from "framer-motion"

const MainImage = () => {
  return <div className=" w-full -mt-1 relative flex justify-center items-center">
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute z-10 text-center text-white">
      <h1 className="text-3xl md:text-6xl my-4 font-bold">Мы – супермодели!</h1>
      <h2 className="text-xl md:text-4xl my-4 font-bold">В мир несем красоту!</h2>
      <span className="text-sm md:text-xl my-8">Модельная студия создана специально для тебя</span>
    </motion.div>
    <img className="   w-full h-[93vh] object-cover brightness-[0.35]" src={mainImage} alt="" />
    <BsChevronDown className="z-10 animate-bounce absolute bottom-2 text-2xl md:text-4xl" color="white" />
  </div>;
};

export default MainImage;
