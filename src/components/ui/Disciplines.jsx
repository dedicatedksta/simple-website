import React from "react";
import { motion } from "framer-motion"
import one from "../../assets/disciplines/disc1.jpg"
import two from "../../assets/disciplines/disc2.JPG"
import three from "../../assets/disciplines/disc3.JPG"


const Disciplines = () => {
  return <motion.div id="disciplines"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className="flex flex-col md:flex-row my-32 mx-auto justify-between max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ">
    <div className="flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <img src={one} className="lg:w-64 lg:h-96 md:w-52 w-64 h-80" ></img>
        <img src={two} className="lg:w-52 lg:h-64 w-48 h-56 ml-6"></img>
      </div>
      <img src={three} className="lg:w-96 lg:h-52 w-80 -mt-8 h-44 ml-6 self-center"></img>
    </div>
    <div className="flex flex-1 justify-center text-center items-center pt-10 pl-0 md:pt-0  md:pl-4 lg:pl-20 xl:pl-28">
      <div>
        <h1 className="text-2xl lg:text-4xl md:text-2xl font-bold mb-6">Дисциплины</h1>
        <span className="text-lg xl:text-xl lg:text-lg md:text-base  text-gray-600">Мы научим тебя основам моделинга. Это позволит тебе успешно развиваться в профессии, принимать участие в кастингах. Весь приобретенный опыт и навыки будут полезны в повседневной жизни.</span>
      </div>
    </div>
  </motion.div>;
};

export default Disciplines;
