import React from "react";

const Disciplines = () => {
  return <div className="flex flex-col md:flex-row my-32 mx-auto justify-between max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ">
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <div className="bg-gray-700 md:w-52 w-64 h-80"></div>
        <div className="bg-gray-300 w-48 h-56 ml-6"></div>
      </div>
      <div className="bg-red-300 w-80 -mt-8 h-44 ml-6 self-center"></div>
    </div>
    <div className="flex justify-center text-center items-center pt-10 pl-0 md:pt-0  md:pl-4 lg:pl-20 xl:pl-28">
      <div>
        <h1 className="text-2xl lg:text-4xl md:text-2xl font-bold mb-6">Дисциплины</h1>
        <span className="text-lg lg:text-lg md:text-base  text-gray-600">Мы научим тебя основам моделинга. Это позволит тебе успешно развиваться в профессии, принимать участие в кастингах. Весь приобретенный опыт и навыки будут полезны в повседневной жизни.</span>
      </div>
    </div>
  </div>;
};

export default Disciplines;
