import React from "react";
import doctor from "../../../assets/images/doctor.png";
import bgimg from "../../../assets/images/appointment.png";
import Button from "../../../components/Button";

const Appointment = () => {
  return (
    <section className=" mt-36" style={{ background: `url(${bgimg})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className=" lg:w-1/2 hidden md:block -mt-32 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary">Appointment</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>GETTING STARTED</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
