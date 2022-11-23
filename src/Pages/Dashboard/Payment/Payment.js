import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import LOading from "../../Shared/LOading/LOading";
import Checkoutform from "./Checkoutbox/Checkoutform";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl font-bold">Payment for: {booking.treatment}</h1>
      <p>
        please pay <strong>$ {booking.price}</strong> for your appointment on{" "}
        {booking.appointmentDate} at {booking.slot}
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <Checkoutform booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
