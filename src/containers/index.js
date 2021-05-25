import CommonLayout from "components/CommonLayout";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import CheckoutProduct from "./CheckoutProduct";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import Admin from "admin";
import setAuthToken from "helpers/setAuthToken";
import PrivateRoute from "./PrivateRoute";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
} else {
  setAuthToken(null);
}

export default function index() {
  return (
    <Router>
      <Toaster />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <PrivateRoute>
            <Route path="/admin">
              <Admin />
            </Route>
          </PrivateRoute>

          <CommonLayout>
            <Route path="/user">
              <Users />
            </Route>
            <Route path="/checkout">
              <CheckoutProduct />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </CommonLayout>
        </Route>
      </Switch>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
