import React from "react";

const About = () => {
  return <div className="flex flex-col text-center mx-auto max-w-sm md:max-w-2xl my-20 ">
    <h1 className="text-2xl md:text-4xl font-bold mb-8">О студии</h1>
    <div className="text-base md:text-lg text-gray-600">Мы готовы громко заявить о тебе, чтобы о твоих успехах, в качестве модели, узнал весь мир. <br /> <br /> На базе моделинга благодаря молодым, креативным, энергичным специалистам ты будешь расти и развиваться, реализовывать свой потенциал и творить вместе с нами, совершенствоваться и покорять новые вершины.</div>
    <button className="mt-8 box-content border-2 border-black bg-black text-white w-24 mx-auto rounded-3xl py-4 px-11 hover:bg-white hover:text-black">Записаться</button>
      
  </div>;
};

export default About;
