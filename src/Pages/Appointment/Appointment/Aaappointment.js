import React, { useState } from "react";
import Appointmentbanner from "../Appointmentbanner/Appointmentbanner";
import AvailableDate from "../AvailableDate/AvailableDate";

const Aaappointment = () => {
  const [selectedDate, setDate] = useState(new Date());
  return (
    <div>
      <Appointmentbanner
        selectedDate={selectedDate}
        setDate={setDate}
      ></Appointmentbanner>
      <AvailableDate selectedDate={selectedDate}></AvailableDate>
    </div>
  );
};

export default Aaappointment;
