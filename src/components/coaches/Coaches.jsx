import React, { useRef } from "react";
import { coaches } from "../../data/coachesData";
import { motion } from "framer-motion"
import Coach from "./Coach";

const Coaches = () => {

  return <motion.div  id="coaches"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className=" md:max-w-6xl max-w-xs mx-auto text-center my-36 md:my-48">
    <h2 className="text-2xl md:text-4xl font-bold mb-8">Наши преподаватели</h2>
    <div className="text-base md:text-xl text-gray-600 mx-auto max-w-xl">Настоящие специалисты, каждый имеет достаточный опыт в своем направлении. Они поделятся с тобой своими знаниями и передадут тебе свои умения и навыки.
    </div>
    <div className=" flex flex-wrap justify-center gap-14 mt-28">
    {coaches.map(coach=><Coach key={coach.id} coach={coach}/>)}
    </div>
  </motion.div>;
};

export default Coaches;
