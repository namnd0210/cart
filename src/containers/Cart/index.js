import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
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
              {/* <th><h5>Items: <strong>{{order.get_cart_items}}</strong></h5></th> */}
              <th>
                <h5>
                  Items: <strong>get_cart_items</strong>
                </h5>
              </th>
              {/* <th><h5>Total:<strong> ${{order.get_cart_total|floatformat:2}}</strong></h5></th> */}
              <th>
                <h5>
                  Total:<strong> $200</strong>
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
          <div className="cart-row">
            {/* <div style={{flex:"2"}}><img className="row-image" src="{{item.product.imageURL}}"></div> */}
            {/* <div style={{flex:"2"}}><p>{{item.product.name}}</p></div> */}
            <div style={{ flex: "2" }}>
              <p>item.product.name</p>
            </div>
            {/* <div style={{flex:"1"}}><p>${{item.product.price|floatformat:2}}</p></div> */}
            <div style={{ flex: "1" }}>
              <p>$item.product.price|floatformat:2</p>
            </div>
            <div style={{ flex: "1" }}>
              {/* <p className="quantity">{{item.quantity}}</p> */}
              <p className="quantity">item.quantity</p>
              <div className="quantity">
                {/* <img data-product="{{item.product.id}}" data-action="add" className="chg-quantity update-cart" src="{% static  'images/arrow-up.png' %}">
              
                      <img data-product="{{item.product.id}}" data-action="remove" className="chg-quantity update-cart" src="{% static  'images/arrow-down.png' %}"> */}
              </div>
            </div>
            {/* <div style={{flex:"1"}}><p>${{item.get_total|floatformat:2}}</p></div> */}
            <div style={{ flex: "1" }}>
              <p>$item.get_total|floatformat:2</p>
            </div>
          </div>
          {/* {% endfor %} */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
