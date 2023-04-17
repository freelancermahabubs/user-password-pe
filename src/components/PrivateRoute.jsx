import React, { useContext } from "react";
import { AuthContext } from "../AutProviders/AutProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
