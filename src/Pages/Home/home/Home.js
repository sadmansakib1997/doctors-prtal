import React from "react";
import Appointment from "../appointment/Appointment";
import Banner from "../Banner/Banner";
import Infocards from "../Info/Infocards";
import Services from "../Service/Services";
import Testionials from "../Testimonial/Testionials";

const Home = () => {
  return (
    <div className="mx-5	">
      <Banner></Banner>
      <Infocards></Infocards>
      <Services></Services>
      <Appointment></Appointment>
      <Testionials></Testionials>
    </div>
  );
};

export default Home;
