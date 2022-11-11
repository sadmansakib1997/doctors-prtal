import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Services from "../services/Services";
import Testimonial from "../testimonial/Testimonial";

const OurService = () => {
  return (
    <div>
      {/* breadcrumb-bg start */}
      <div className="breadcrumb-bg">
        <div className="overlay">
          <Container>
            <div className="breadcrumb-container d-flex justify-content-between align-items-center">
              <h2 className="breadcrumb-title">Our service</h2>
              <Breadcrumb>
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/ourService" activeClassName="active">
                  Our Service
                </NavLink>
              </Breadcrumb>
            </div>
          </Container>
        </div>
      </div>
      {/* breadcrumb-bg end */}
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  );
};

export default OurService;
