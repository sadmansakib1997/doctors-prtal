import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../context/Authprovider/Authprovider";

const Myappointment = () => {
  const { user } = useContext(Authcontext);

  const url = ` https://doctors-portal-server-three-kohl.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],

    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },

    // queryFn: async () =>
    //   fetch(` https://doctors-portal-server-three-kohl.vercel.app/bookings?email=${user?.email}`, {
    //     headers: {
    //       authorization: `bearer ${localStorage.getItem("accesstoken")}`,
    //     },
    //   }).then((res) => res.json()),
  });
  return (
    <div>
      <h1 className="mb-6">MY APPOINMENT</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patientname}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking?.price && !booking.paid && (
                    <Link to={`/dash/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-xs">pay</button>
                    </Link>
                  )}
                  {booking?.price && booking.paid && (
                    <button className="btn btn-success btn-xs">Paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappointment;
