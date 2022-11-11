import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import TripImage from "../TripImage/TripImage";
import "./TripGallery.css";

const TripGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://enigmatic-cliffs-59575.herokuapp.com/gallery")
      .then(function (response) {
        setImages(response.data);
      });
  }, []);

  return (
    // galler-area start
    <div className="gallery-area">
      <Container fluid>
        <div className="section-top">
          <h2 className="text-6xl font-bold mb-3">SYNTHETIC GALLERY</h2>
          <p className="text-2xl mb-3">
            Following is the gallery which contains best of the moments captured
            from the trips <br /> our clients has enjoyed while visiting their
            travel destinations.
          </p>
        </div>
        <Row className="w-4/5 mx-20 grid gap-10 grid-cols-3">
          {images.map((image) => (
            <TripImage key={image._id} image={image}></TripImage>
          ))}
        </Row>
      </Container>
    </div>
    // galler-area end
  );
};

export default TripGallery;
