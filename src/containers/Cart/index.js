import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import up from "./arrow-up.png";
import down from "./arrow-down.png";

const Cart = () => {
  const dispatch = useDispatch();
  const basket = useSelector(({ products: { basket } }) => basket);

  const amount = basket.reduce((acc, item) => (acc += item.amount), 0);

  const total = basket.reduce(
    (acc, item) => (acc += item.amount * item.price),
    0
  );

  const increaseProduct = (product) => {
    dispatch({
      type: "PRODUCT_INCREMENT",
      product,
    });
  };

  const decreaseProduct = (product) => {
    dispatch({
      type: "PRODUCT_DECREMENT",
      product,
    });
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="box-element">
          <a className="btn btn-outline-dark" href="/">
            &#x2190; Continue Shopping
          </a>

          <br />
          <br />
          <table className="table">
            <tr>
              <th>
                <h5>
                  Items: <strong>{amount}</strong>
                </h5>
              </th>
              <th>
                <h5>
                  Total:<strong> ${total}</strong>
                </h5>
              </th>
              <th>
                <Link className="btn btn-success" to="/checkout">
                  Checkout
                </Link>
              </th>
            </tr>
          </table>
        </div>

        <br />
        <div className="box-element">
          <div className="cart-row">
            <div style={{ flex: "2" }}></div>
            <div style={{ flex: "2" }}>
              <strong>Item</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Price</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Quantity</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Total</strong>
            </div>
          </div>
          {/* {% for item in items %} */}
          {basket.map((item) => {
            return (
              <div className="cart-row align-items-center">
                <div style={{ flex: "2" }}>
                  <img className="row-image" src={item.images[0]} />
                </div>
                <div style={{ flex: "2" }}>
                  <p>{item.name || "empty name"}</p>
                </div>
                <div style={{ flex: "1" }}>
                  <p>${item.price || 0}</p>
                </div>
                <div style={{ flex: "1" }}>
                  <p className="quantity">{item.amount}</p>
                  <div className="quantity">
                    <img
                      data-action="add"
                      className="chg-quantity update-cart"
                      src={up}
                      onClick={() => increaseProduct(item)}
                    />

                    <img
                      data-action="remove"
                      className="chg-quantity update-cart"
                      src={down}
                      onClick={() => decreaseProduct(item)}
                    />
                  </div>
                </div>
                <div style={{ flex: "1" }}>
                  <p>${item.amount * item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
