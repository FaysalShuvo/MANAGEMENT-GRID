// import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "../pages/login/Login";

const PrivateRoute = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Login />;
  //   return user ? children : <Navigate to="/log-in" />;
};

export default PrivateRoute;
