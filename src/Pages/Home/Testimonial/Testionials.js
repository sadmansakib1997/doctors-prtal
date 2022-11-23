import React from "react";
import icons from "../../../assets/icons/quote.svg";
import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testionials = () => {
  const testidatas = [
    {
      id: 1,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
    },
    {
      id: 1,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img2,
    },
    {
      id: 2,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-primary">Testimonial</h1>
          <p className="text font-semibold">What Our Clients Says</p>
        </div>
        <figure>
          <img className="w-20 lg:w-48" src={icons} alt="" />
        </figure>
      </div>
      <div className="grid gap-6  grid-cols-3">
        {testidatas.map((testi) => (
          <Testimonial key={testi.id} testi={testi}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testionials;
