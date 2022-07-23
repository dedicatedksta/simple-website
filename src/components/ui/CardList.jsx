import React from "react";
import { cards } from "../../data/data";
import Card from "./Card";

const CardList = () => {
  return <div>
    {cards.map(card=><Card key={card.id} card={card}/>)}
  </div>;
};

export default CardList;
