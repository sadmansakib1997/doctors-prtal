import React from "react";

import "./Team.css";

<i class="fab "></i>;

const Team = ({ team }) => {
  const { des, img, name, role } = team || {};

  return (
    <div className="card w-96 bg-lime-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="font-bold">{role}</p>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Team;
