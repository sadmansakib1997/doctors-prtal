import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="w-full p-1 mb-0">
      <h2 className="fw-bold text-center">All Programing languages </h2>
      <p className="text-center fw-semibold">We are best programmer</p>
      <Carousel className="mt-2 ">
        <Carousel.Item className="">
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src="https://thumbs.dreamstime.com/b/phone-hand-python-language-symbol-white-mobile-screen-coding-software-concept-abstract-digital-wireframe-low-poly-155898716.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src="https://content.instructables.com/ORIG/FTP/GXQA/HM768QN0/FTPGXQAHM768QN0.jpg?auto=webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src="https://i.pinimg.com/originals/3c/af/d1/3cafd1bfdbc7191aaf49981b3e3d0594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>PHP</h3>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "626px", height: "500px" }}
            className="d-block w-100 rounded"
            src="https://www.careergirls.org/wp-content/uploads/2015/06/Computer_Programmer1920X10180.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>PHP</h3>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
