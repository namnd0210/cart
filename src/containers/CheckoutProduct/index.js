import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./SubTotal.js";
import CSSModules from "react-css-modules";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const basket = useSelector(({ products: { basket } }) => basket);
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="box-element" id="form-wrapper">
          <form id="form">
            <div id="user-info">
              <div className="form-field">
                <input
                  required
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                />
              </div>
              <div className="form-field">
                <input
                  required
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                />
              </div>
            </div>

            <div id="shipping-info">
              <hr />
              <p>Shipping Information:</p>
              <hr />
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  placeholder="Address.."
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  placeholder="City.."
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  placeholder="State.."
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="zipcode"
                  placeholder="Zip code.."
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  placeholder="Zip code.."
                />
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
          {/* {% for item in items %}
				<div className="cart-row">
					<div style={{flex:"2"}}><img className="row-image" src="{{item.product.imageURL}}"></div>
					<div style={{flex:"2"}}><p>{{item.product.name}}</p></div>
					<div style={{flex:"1"}}><p>${{item.product.price|floatformat:2}}</p></div>
					<div style={{flex:"1"}}><p>x{{item.quantity}}</p></div>
				</div>
				{% endfor %}
				<h5>Items:   {{order.get_cart_items}}</h5>
				<h5>Total:   ${{order.get_cart_total|floatformat:2}}</h5> */}

          <div className="cart-row">
            <div style={{ flex: "2" }}>
              <img className="row-image" src="/" />
            </div>
            <div style={{ flex: "2" }}>
              <p>item.product.name</p>
            </div>
            <div style={{ flex: "1" }}>
              <p>$item.product.price|floatformat:2</p>
            </div>
            <div style={{ flex: "1" }}>
              <p>xitem.quantity</p>
            </div>
          </div>
          <h5>Items: order.get_cart_items</h5>
          <h5>Total: $order.get_cart_total|floatformat:2</h5>
        </div>
      </div>
    </div>
  );
};
export default CSSModules(Checkout, styles);
