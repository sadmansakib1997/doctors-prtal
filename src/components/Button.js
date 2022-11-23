import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white font-semibold">
      {children}
    </button>
  );
};

export default Button;
