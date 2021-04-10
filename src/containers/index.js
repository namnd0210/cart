import CommonLayout from "components/CommonLayout";
import Headers from "components/Headers";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

export default function index() {
  return (
    <Router>
      <Headers />

      <CommonLayout>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CommonLayout>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
