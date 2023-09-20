import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.data);
  let location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default ProtectedRoute;
