import React from "react";

const Testimonial = ({ testi }) => {
  const { name, description, address, img } = testi;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text">{description}</p>
        <div className="flex items-center">
          <div className="mr-5">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
