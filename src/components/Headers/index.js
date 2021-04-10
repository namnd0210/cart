import Avatar from "components/Avatar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import cart from "./cart.png";
import CartModal from "components/CartModal";

const Headers = () => {
  const [openModal, toggleModal] = useState(false);

  return (
    <div styleName="wrapper">
      {openModal && (
        <CartModal openModal={openModal} onClose={() => toggleModal(false)} />
      )}

      <div className="container" styleName="header">
        <Link to="/">Trang chủ</Link>

        <div styleName="right-header">
          <div styleName="cart">
            <img src={cart} alt="cart" onClick={() => toggleModal(true)} />
          </div>

          <Link to="/users">
            <div styleName="profile">
              <Avatar />
              <div styleName="user-name">Đức Nam</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CSSModules(Headers, styles);
