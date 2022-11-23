import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider/Authprovider";
import useAdmin from "../../hooks/Useadmin";

const Adminprivateroute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default Adminprivateroute;
