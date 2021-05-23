import React from "react";
import CurrencyFormat from "react-currency-format";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { vnpayPayment } from "redux/product/product.action";
import { Button } from "reactstrap";

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const Subtotal = () => {
  const dispatch = useDispatch();
  const basket = useSelector(({ products: { basket } }) => basket);

  const handleCheckoutVnPay = () => {
    dispatch(vnpayPayment());
  };

  return (
    <div styleName="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                ( Subtotal {basket.length} items ) :{" "}
                <strong>{`${value}`}</strong>
              </p>
              <small styleName="subtotal__gift">
                <input type="checkbox" /> This order contains
              </small>
            </>
          );
        }}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button color="warning" onClick={handleCheckoutVnPay}>
        Checkout by Vnpay
      </Button>
    </div>
  );
};
export default CSSModules(Subtotal, style);
