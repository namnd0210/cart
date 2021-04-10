import Avatar from "components/Avatar";
import React from "react";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import cart from "./cart.png";

const Headers = () => {
  return (
    <div styleName="wrapper">
      <Link to="/">Home</Link>

      <div styleName="right-header">
        <div styleName="cart">
          <img src={cart} alt="cart" />
        </div>
        <Link to="/users">
          <div styleName="profile">
            <Avatar />
            <div styleName="user-name">Duc Nam</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CSSModules(Headers, styles);
