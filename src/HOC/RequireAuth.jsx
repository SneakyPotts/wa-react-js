import React from 'react';
import {Navigate} from "react-router-dom";

const RequireAuth = ({isAuth, children}) => {
  if (!isAuth) {
    return (
      <Navigate to="/login"/>
    );
  }

  return children;
};

export default RequireAuth;