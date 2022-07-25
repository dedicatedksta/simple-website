import React from "react";

const Coach = ({coach}) => {
  return <div className="flex flex-col justify-center items-center text-center w-72">
    <img src={coach.img} className="w-[200px] h-[200px] object-cover rounded-full" alt="" />
    <h2 className="font-bold text-xl">{coach.name}</h2>
    <h3 className=" text-gray-500 text-xs mt-1 mb-4">{coach.spec}</h3>
    <div className="text-xs text-gray-500">{coach.description}</div>
  </div>;
};

export default Coach;
