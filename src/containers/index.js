import CommonLayout from "components/CommonLayout";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CheckoutProduct from "./CheckoutProduct";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import Admin from "admin";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

        <CommonLayout>
          <Switch>
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
          </Switch>
        </CommonLayout>
      </Switch>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
