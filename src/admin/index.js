import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Admin from "admin/layouts/Admin.js";

import "admin/assets/css/material-dashboard-react.css?v=1.10.0";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default index;
