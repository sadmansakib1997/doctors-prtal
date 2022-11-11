import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://enigmatic-cliffs-59575.herokuapp.com/services")
      .then(function (response) {
        setServices(response.data);
      });
  }, []);

  return (
    // service-part start
    <div className="bg-slate-400 my-4 py-4">
      <div className="section-top">
        <h2 className="text-5xl font-bold mb-3">
          Explore the World for Yourself
        </h2>
        <p className="text-2xl font-semibold">
          Come Explore the world with us and enjoy the best trip of your life.{" "}
          <br />
          We offer trips to every end of the world.
        </p>
      </div>
      {!services.length ? (
        <Spinner
          className="spinner-home"
          animation="border"
          variant="secondary"
        />
      ) : (
        <div className="grid grid-cols-3 gap-4 my-7 px-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      )}
    </div>
    // service-part end
  );
};

export default Services;
