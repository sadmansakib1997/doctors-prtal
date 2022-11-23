import { data } from "autoprefixer";
import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../../../context/Authprovider/Authprovider";

const Bookingmodal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(Authcontext);

  const handlebooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,

      slot,
      treatment: treatmentName,
      patientname: name,
      email,
      phone,
      price,
    };

    fetch(" https://doctors-portal-server-three-kohl.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking successfull");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="bookingmodals" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingmodals"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-7">{treatmentName}</h3>
          <form onSubmit={handlebooking} className="grid grid-cols-1 gap-5">
            <input type="text" disabled value={date} className="input w-full" />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone number"
              className="input w-full"
            />
            <input
              className="btn btn-accent text-xl text-white"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Bookingmodal;
