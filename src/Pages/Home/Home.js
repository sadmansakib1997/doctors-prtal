import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="w-full p-1 mb-0">
      <h2 className="fw-bold text-center">All Programing languages </h2>
      <p className="text-center fw-semibold">
        We Provide Programming realted Course
      </p>
      <Carousel className="mt-2 ">
        <Carousel.Item className="">
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src="https://img.freepik.com/free-photo/programmer-scanning-screen-his-smartwatch-with-smartphone-camera_1098-18710.jpg?w=740&t=st=1666802920~exp=1666803520~hmac=013dbf060117597d70990b0969919109471251128b38e445f9c1b87f7c0d1e57"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="fw-bold">
              “asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf“asgdasgdgasdfgasgfasgf
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src="https://img.freepik.com/free-vector/digital-coding-background-with-numbers-zero-one_1017-30363.jpg?t=st=1666802906~exp=1666803506~hmac=9856a6224b93b7fa7f6ef25c37d7a4c6c7d82a8e33f67076dac1696af19ab5ef"
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
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1666803004~exp=1666803604~hmac=9f6ed11ca0cad2159f692ded5e48cab2a99c07ea0f4637b6517187c15f08a792"
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
