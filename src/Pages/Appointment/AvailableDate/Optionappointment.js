import React from "react";

const Optionappointment = ({ option, setTreatment }) => {
  const { name, slots, price } = option;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold text-primary">{name}</h2>
        <p>{slots?.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots?.length} {slots?.length > 1 ? "spaces" : "space"} Available
        </p>
        <p className="tex-2xl font-semibold">price:{price}</p>

        <div className="card-actions justify-center">
          <label
            disabled={slots?.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="bookingmodals"
            className="btn btn-secondary text-white"
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Optionappointment;
