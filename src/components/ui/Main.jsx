import React from "react";
import About from "../ui/About";
import Coaches from "../coaches/Coaches";
import Disciplines from "../ui/Disciplines";
import Map from "../ui/Map";
import MainImage from "../mainImage/MainImage";
import CardList from "../ui/CardList";
import FormLayout from "../ui/FormLayout";


const Main = () => {
  return <main>
      <MainImage/>
      <About/>
      <Disciplines/>
      <CardList/>
      <Coaches/>
      <FormLayout popup={false}/>
      <Map/>
  </main>;
};

export default Main;
