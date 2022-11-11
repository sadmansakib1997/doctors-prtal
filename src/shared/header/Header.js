import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-red-500">
      <div className="navbar-start">
        <Link to="/">
          {" "}
          <a href="/" className="btn btn-ghost normal-case text-2xl font-bold">
            SYNTHIA'S World
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="text-xl font-bold ">
            <a href="/">Home</a>
          </li>
          <Link to={"/aboutus"}>
            {" "}
            <li className="text-xl font-bold">
              <a href="/">About Us</a>
            </li>
          </Link>
          <Link to={"/ourservice"}>
            {" "}
            <li className="text-xl font-bold">
              <a href="/">Services</a>
            </li>
          </Link>

          <Link to={"/contact"}>
            {" "}
            <li className="text-xl font-bold">
              <a href="/">Contact Us</a>
            </li>
          </Link>
        </ul>
      </div>

      {user?.email ? (
        <>
          <li className="font-semibold px-3">
            <Link to="/myorder">Orders</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </div>
  );
};

export default Header;
