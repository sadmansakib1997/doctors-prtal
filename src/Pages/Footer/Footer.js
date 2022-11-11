import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import footerImg1 from "../../images/footer-1-1.jpg";
import footerImg2 from "../../images/footer-1-2.jpg";
import footerImg3 from "../../images/footer-1-3.jpg";
import footerImg4 from "../../images/footer-1-4.jpg";
import footerImg5 from "../../images/footer-1-5.jpg";
import footerImg6 from "../../images/footer-1-6.jpg";
import "./Footer.css";
import CopyRight from "../CopyRight/CopyRight";

const Footer = () => {
  return (
    <>
      <div className="bg-base-300">
        {/* // footer-part start */}

        <div className="">
          <h2 className="text-6xl font-bold text-fuchsia-600">
            SYNTHETIC WORLD
          </h2>
          <p className="text-2xl mt-3">
            SYNTHTIC WORLD is a simply stunning theme perfect for all types of
            travel & tourism businesses.
          </p>
        </div>
        <div className="my-8">
          <div className="flex justify-center">
            <FaPhoneAlt className="text-4xl" />
            <p className="px-2 text-4xl">1-677-124-44227</p>
          </div>
          <div className="flex justify-center my-4">
            <FaMapMarkedAlt className="text-4xl" />
            <p className="px-2 text-4xl"> Eighth Avenue 487, New York</p>
          </div>
          <div className="flex justify-center">
            <FaEnvelope className="text-4xl" />
            <p className="px-2 text-4xl">Synthia@gmail.com</p>
          </div>
        </div>

        <footer className="footer p-10 bg-base-300 text-base-content">
          <div>
            <span className="text-3xl font-bold">Latest Updates</span>
            <p>
              Traveling – It Leaves You Speechless, Then Turns You Into A
              Storyteller
            </p>
            <small>February 21, 2022</small>
            <p>
              A Journey Is Always Best Measured In New Friends, Rather Than
              Miles
            </p>
            <small>june 15, 2022</small>
          </div>
          <div>
            <span className="text-3xl font-bold">Company</span>
            <a className="link link-hover" href=" ">
              About us
            </a>
            <a className="link link-hover" href=" ">
              Contact
            </a>
            <a className="link link-hover" href=" ">
              Jobs
            </a>
            <a className="link link-hover" href=" ">
              Press kit
            </a>
          </div>
          <div>
            <span className="text-3xl font-bold">Social</span>
            <div className="grid grid-cols-3 gap-4">
              <img src={footerImg1} alt="" />
              <img src={footerImg2} alt="" />
              <img src={footerImg3} alt="" />
              <img src={footerImg4} alt="" />
              <img src={footerImg5} alt="" />
              <img src={footerImg6} alt="" />
            </div>
          </div>
        </footer>
        {/* // footer-part end */}
      </div>
      <CopyRight></CopyRight>
    </>
  );
};

export default Footer;
