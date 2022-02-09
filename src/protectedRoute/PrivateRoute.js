// import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login/Login";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoute = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Login />;
 
};

export default PrivateRoute;
