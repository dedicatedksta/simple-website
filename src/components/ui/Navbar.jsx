import React from "react";

const Navbar = () => {
  return <nav className="flex py-7 px-8 bg-black text-white font-bold justify-between text-lg items-center">
    <ul className="flex  ">
      <li className="px-3">О нас</li>
      <li className="px-3">Дисциплины</li>
      <li className="px-3">Педагоги</li>
      <li className="px-3">Контакты</li>
    </ul>
    <span className=" font-normal text-2xl">+7 999 999 99 99</span>
  </nav>;
};

export default Navbar;
