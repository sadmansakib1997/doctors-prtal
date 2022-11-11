import React from "react";
import {
  FaBusAlt,
  FaGlobeEurope,
  FaHotel,
  FaAddressBook,
} from "react-icons/fa";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <div className="bg-emerald-300 pb-6 mb-10">
        <h1 className="mt-16 text-6xl font-bold text-red-500 pt-4">
          OUR SERVICES
        </h1>
        <div className="grid gap-5 grid-cols-3 mx-8 my-10">
          <div className="card w-96 bg-red-100 border-solid	 shadow-xl">
            <div className="card-body">
              <img
                src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?size=626&ext=jpg&ga=GA1.2.220065164.1668169286&semt=sph"
                alt=""
              />
              <h2 className="card-title">Private Transport</h2>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
              <div className="card-actions justify-end">
                <Link to={"/ourservice"}>
                  {" "}
                  <button className="btn btn-primary">SEE ALL</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-red-100 border-solid shadow-xl">
            <div className="card-body">
              <img
                src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?w=740&t=st=1668169333~exp=1668169933~hmac=7388bcc59d352598c3600cb0746a40448475988c067870572d511704d5edf8b0"
                alt=""
              />
              <h2 className="card-title">Great Hotels</h2>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
              <div className="card-actions justify-end">
                <Link to={"/ourservice"}>
                  {" "}
                  <button className="btn btn-primary">SEE ALL</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-red-100 border-solid shadow-xl">
            <div className="card-body">
              <img
                src="https://img.freepik.com/free-photo/booking-ticket-online-reservation-travel-flight-concept_53876-132645.jpg?w=740&t=st=1668169472~exp=1668170072~hmac=92876cd4a399c3f4fc309ead18b5b021624ad6b30be042414a2ca3d90264ced4"
                alt=""
              />
              <h2 className="card-title">Fast Booking</h2>
              <p>
                We have the best team in the whole world that organizes the best
                trips for our clients and make their
              </p>
              <div className="card-actions justify-end">
                <Link to={"/ourservice"}>
                  {" "}
                  <button className="btn btn-primary">SEE ALL</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
