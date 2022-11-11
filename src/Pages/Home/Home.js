import React from "react";
import About from "../about/About";

import Banner from "../Banner/Banner";
import Services from "../../pages/services/Services";
import Testimonial from "../testimonial/Testimonial";
import TripGallery from "../tripgallery/TripGallery";
import OurTeam from "../ourteam/OurTeam";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Testimonial></Testimonial>
      <TripGallery></TripGallery>
      <OurTeam></OurTeam>

      {/* <Banner></Banner>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <TripGallery></TripGallery>
      <OurTeam></OurTeam> */}
    </div>
  );
};

export default Home;
