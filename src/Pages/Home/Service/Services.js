import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const cardservicedata = [
    {
      id: 1,
      name: "Flouride Treatment",
      description:
        "Your love is my energy my love shona,Your love is my energy my love shona",
      img: img1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Your love is my energy my love shona,Your love is my energy my love shona",
      img: img2,
    },
    {
      id: 3,
      name: "Whitenning Teetg",
      description:
        "Your love is my energy my love shona,Your love is my energy my love shona",
      img: img3,
    },
  ];
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className=" text-4xl font-semibold text-primary">Our SERVICES</h1>
        <p className="text-2xl font-semibold">Services We Provided</p>
      </div>
      <div className="grid gap-20 mt-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {cardservicedata.map((servicedata) => (
          <Service key={servicedata.id} servicedata={servicedata}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
