import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LOading from "../../Shared/LOading/LOading";
import Bookingmodal from "../Bookingmodal/Bookingmodal";
import Optionappointment from "./Optionappointment";

const AvailableDate = ({ selectedDate }) => {
  // const [Appointmentoptions, setAppointmentoption] = useState([]);

  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: Appointmentoptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentoptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentoptions?date=${date}`
      );

      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LOading></LOading>;
  }
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentoptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentoption(data));
  // }, []);

  return (
    <div className="my-16">
      <p className="text-3xl font-semibold text-secondary text-center">
        Available Appointment: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {Appointmentoptions.map((option) => (
          <Optionappointment
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></Optionappointment>
        ))}
      </div>
      {treatment && (
        <Bookingmodal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></Bookingmodal>
      )}
    </div>
  );
};

export default AvailableDate;
