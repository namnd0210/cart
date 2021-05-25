import React, { useCallback } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PermissionRoute = ({ children, ...props }) => {
  const user = useSelector(({ auth: { user } }) => user);
  console.log(user);

  const render = useCallback(() => {
    if (
      JSON.stringify(user) !== JSON.stringify({}) &&
      user?.roles[0] === "ROLE_ADMIN"
    )
      return children;

    return <Redirect to="/" />;
  }, [children]);

  return <Route {...props} render={render} />;
};

export default PermissionRoute;
