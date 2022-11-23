import React from "react";
import { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { Authcontext } from "../../../context/Authprovider/Authprovider";

const Errorelement = () => {
  const { logout } = useContext(Authcontext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handlelogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p className="text-3xl font-semibold">This is went Wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h1>
        please
        <Link to={"/login"}>
          <button onClick={handlelogout}>Log Out</button>
        </Link>
      </h1>
    </div>
  );
};

export default Errorelement;
