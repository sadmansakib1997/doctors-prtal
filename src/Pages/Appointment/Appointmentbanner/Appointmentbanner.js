import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";

const Appointmentbanner = ({ selectedDate, setDate }) => {
  return (
    <header>
      <div style={{ background: `url(${bg})` }} className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Appointmentbanner;
