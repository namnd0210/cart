import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cart from "./cart.png";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import setAuthToken from "helpers/setAuthToken";
import { logOut } from "redux/auth/auth.action";

const Headers = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const dispatch = useDispatch();

  const user = useSelector(({ auth: { user } }) => user);
  const basket = useSelector(({ products: { basket } }) => basket);
  const amount = basket.reduce((acc, item) => (acc += item.amount), 0);

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
    dispatch(logOut());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Ecom
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Store <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <Link to="/cart">
            <img id="cart-icon" src={cart} alt="cart" />
          </Link>
          <p id="cart-total">{amount || 0}</p>

          {JSON.stringify(user) === JSON.stringify({}) && (
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          )}

          {JSON.stringify(user) !== JSON.stringify({}) && (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{user.email}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{user.email}</DropdownItem>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CSSModules(Headers, styles, { allowMultiple: true });
