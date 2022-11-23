import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Infocard from "./Infocard";

const Infocards = () => {
  const cardData = [
    {
      id: 1,
      name: "Openning Hour",
      description: "jan tmi kokhn uthbe",
      icon: clock,
      bgclass: " bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "jan tmi kokhn uthbe",
      icon: marker,
      bgclass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us Now",
      description: "jan tmi kokhn uthbe",
      icon: phone,
      bgclass: " bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid gap-6 text-white mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {cardData.map((card) => (
        <Infocard key={card.id} card={card}></Infocard>
      ))}
    </div>
  );
};

export default Infocards;
