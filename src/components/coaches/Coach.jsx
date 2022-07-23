import React from "react";

const Coach = ({coach}) => {
  return <div className="flex flex-col justify-center items-center text-center w-72">
    <img src={coach.img} className="w-[200px] h-[200px] object-cover rounded-full" alt="" />
    <h1 className="font-bold text-xl">{coach.name}</h1>
    <h2 className=" text-gray-500 text-xs mt-1 mb-4">{coach.spec}</h2>
    <span className="text-xs text-gray-500">{coach.description}</span>
  </div>;
};

export default Coach;
