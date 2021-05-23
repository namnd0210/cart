import React from "react";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import cart from "./cart.png";
// import { auth } from "firebase";
import { Link } from "react-router-dom";

const Headers = () => {
  const basket = useSelector(({ products: { basket } }) => basket);
  // const history = useHistory();
  // const login = () => {
  //   if (user) {
  //     auth().signOut();
  //     history.push("/login");
  //   }
  // };

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
          <a href="#" className="btn btn-warning">
            Login
          </a>

          <Link to="/cart">
            <img id="cart-icon" src={cart} alt="cart" />
          </Link>
          <p id="cart-total">{basket.length || 0}</p>
        </div>
      </div>
    </nav>
  );
};

export default CSSModules(Headers, styles, { allowMultiple: true });
