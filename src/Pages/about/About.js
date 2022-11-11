import React from "react";
import {
  FaBusAlt,
  FaGlobeEurope,
  FaHotel,
  FaAddressBook,
} from "react-icons/fa";

import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-area">
      {/* <Container>
        <Row>
          <Col lg={3}>
            <div className="single-about">
              <FaBusAlt className="about-icon" />
              <h5>Private Transport</h5>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-about">
              <FaGlobeEurope className="about-icon" />
              <h5>Diverse Destinations</h5>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-about">
              <FaHotel className="about-icon" />
              <h5>Great Hotels</h5>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-about">
              <FaAddressBook className="about-icon" />
              <h5>Fast Booking</h5>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
            </div>
          </Col>
        </Row>
      </Container> */}
      <div className="grid gap-5 grid-cols-3 mx-8 my-10">
        <div className="card w-96 bg-red-100 border-solid	 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Private Transport</h2>
            <p>
              We have the best team in the whole world that organizes the best
              trips for our clients and make their
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-red-100 border-solid shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Great Hotels</h2>
            <p>
              We have the best team in the whole world that organizes the best
              trips for our clients and make their
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-red-100 border-solid shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fast Booking</h2>
            <p>
              We have the best team in the whole world that organizes the best
              trips for our clients and make their
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
