import React from "react";

import { Link, useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();

  const { _id, des, img, price, title } = service || {};

  const handleBookBtn = () => {
    navigate.push(`/serviceDetails/:${_id}`);
  };

  return (
    // <Col lg={4} md={6}>
    //   <div className="servcie">
    //     <img src={img} alt="" />
    //     <p className="price">$ {price}</p>
    //     <div className="service-content">
    //       <h5 className="sevice-title">{title}</h5>
    //       <p>{des}</p>
    //       <button onClick={handleBookBtn}>book now</button>
    //     </div>
    //   </div>
    // </Col>

    <div className="service">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>${price}</p>
          <p>{des}</p>
          <div className="card-actions">
            <Link to={`/servicedetails/${_id}`}>
              <button onClick={handleBookBtn} className="btn btn-primary">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
