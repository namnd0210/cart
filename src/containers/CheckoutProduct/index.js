import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Label, Input } from "reactstrap";
import { checkout } from "redux/product/product.action";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [shipType, setShipType] = useState("Express");
  const [shipCompany, setShipCompany] = useState("Viettel Post");
  const [method, setMethod] = useState("Cash");

  const basket = useSelector(({ products: { basket } }) => basket);
  const amount = basket.reduce((acc, item) => (acc += item.amount), 0);
  const total = basket.reduce(
    (acc, item) => (acc += item.amount * item.price),
    0
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      user: {
        id: 1,
      },
      cart: {
        items: basket.map((item) => ({
          item: { id: item.id },
          amount: item.amount,
        })),
      },
      payment: {
        method,
        total: amount,
        shipment: {
          shipType,
          shipCompany,
          shipAddress: address,
        },
      },
    };

    dispatch(checkout(values));

    console.log(values);
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="box-element" id="form-wrapper">
          <form id="form" onSubmit={handleSubmit}>
            <div id="user-info">
              <hr />
              <p>Personal information:</p>
              <hr />

              <div className="form-field">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  placeholder="Address.."
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div id="shipping-info">
              <hr />
              <p>Shipping Information:</p>
              <hr />

              <div className="form-field">
                <Label for="shipType">Ship type</Label>
                <Input
                  type="select"
                  name="shipType"
                  id="shipType"
                  onChange={(e) => setShipType(e.target.value)}
                >
                  <option value="Express" selected>
                    Express
                  </option>
                  <option value="Standard">Standard</option>
                </Input>
              </div>

              <div className="form-field">
                <Label for="shipCompany">Ship company</Label>
                <Input
                  type="select"
                  name="shipCompany"
                  id="shipCompany"
                  onChange={(e) => setShipCompany(e.target.value)}
                >
                  <option value="Viettel Post" selected>
                    Viettel Post
                  </option>
                  <option value="GHN">GHN</option>
                  <option value="J&T Express">J&T Express</option>
                </Input>
              </div>
              <div className="form-field">
                <Label for="method">Method</Label>
                <Input
                  type="select"
                  name="method"
                  id="method"
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option value="Cash" selected>
                    Cash
                  </option>
                  <option value="Credit">Credit</option>
                </Input>
              </div>
            </div>

            <hr />
            <input
              id="form-button"
              className="btn btn-success btn-block"
              type="submit"
              value="Continue"
            />
          </form>
        </div>

        <br />
        <div className="box-element hidden" id="payment-info">
          <small>Paypal Options</small>
          <button id="make-payment">Make payment</button>
          <div id="paypal-button-container"></div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="box-element">
          <Link className="btn btn-outline-dark" to="/cart">
            &#x2190; Back to Cart
          </Link>
          <hr />
          <h3>Order Summary</h3>
          <hr />

          {basket.length > 0 &&
            basket.map((item) => (
              <div className="cart-row" styleName="cart-row">
                <div style={{ flex: "2" }}>
                  <img className="row-image" src={item.images[0]} />
                </div>
                <div style={{ flex: "2" }}>
                  <p>{item.name}</p>
                </div>
                <div style={{ flex: "1" }}>
                  <p>${item.price}</p>
                </div>
                <div style={{ flex: "1" }}>
                  <p>x{item.amount}</p>
                </div>
              </div>
            ))}

          <h5>Items: {amount}</h5>
          <h5>Total: ${total}</h5>
        </div>
      </div>
    </div>
  );
};
export default CSSModules(Checkout, styles);
