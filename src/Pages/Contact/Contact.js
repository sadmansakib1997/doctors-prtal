import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// import "./Contact.css";
import contactThumb from "../../images/footer-1-1.jpg";
import { NavLink } from "react-router-dom";

<i class="fas "></i>;

const Contact = () => {
  return (
    <>
      <div className="bg-slate-300 pb-10 mb-10">
        {/* breadcrumb start */}
        <div className="breadcrumb-bg">
          <div className="overlay">
            <Container>
              <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                <h2 className="breadcrumb-title">Contact Us</h2>
                <Breadcrumb>
                  <NavLink to="/home">Home</NavLink>
                  <span>/</span>
                  <NavLink to="/contact" activeClassName="active">
                    contact us
                  </NavLink>
                </Breadcrumb>
              </div>
            </Container>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* contact-area start */}
        <div>
          <Container>
            <div className="my-8 flex justify-center ">
              <div>
                <h1 className="text-3xl font-bold mb-4">phone number</h1>
                <div className="flex justify-center">
                  <FaPhoneAlt className="text-4xl mx-2" />
                  <p>+1 (325) 555-0125</p>
                  <p>+1 (458) 666-0125</p>
                </div>
              </div>
              <div className="mx-5">
                <h1 className="text-3xl font-bold mb-4">Email Us</h1>
                <div className="flex justify-center">
                  <FaEnvelope className="text-4xl mx-2" />
                  <p>SSS@gmail.com</p>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">Address</h1>
                <div className="flex justify-center">
                  <FaMapMarkedAlt className="text-4xl mx-2" />
                  <p>234 Triumph, Los Angeles, California, US</p>
                </div>
              </div>
            </div>

            <Row className="align-items-center contact-feild">
              <Col lg={7}>
                <div className="contact-form bg-red-200">
                  <div className="text-3xl font-bold">
                    <h2>Contact With Us Or Email Us</h2>
                  </div>
                  <input type="text" placeholder="Your Name" />
                  <br />
                  <input
                    className="my-4"
                    type="email"
                    placeholder="Your Email"
                  />
                  <br />
                  <input className="my-2" type="text" placeholder="Subject" />
                  <br />

                  <textarea placeholder="Your Message"></textarea>
                  <br />
                  <button className="regular-btn ml-2">Submit</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* contact-area end */}
      </div>
    </>
  );
};

export default Contact;
