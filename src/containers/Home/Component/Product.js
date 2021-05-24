import React from "react";
import CSSModules from "react-css-modules";
import style from "../styles/product.module.scss";
import DefaultImage from "constants/images/DefaultImage.png";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      product,
    });
  };

  return (
    <div className="col-lg-3">
      <div styleName="image-wrapper">
        <div className="box-element product">
          <img
            src={product.images[0] || DefaultImage}
            alt={product.description}
          />
          <h6>
            <strong>{product.name}</strong>
          </h6>
          <hr />
          <button
            onClick={addToBasket}
            data-product={product.id}
            data-action="add"
            className="btn btn-outline-secondary add-btn update-cart"
          >
            Add
          </button>{" "}
          <button className="btn btn-outline-success" href="#">
            View
          </button>
          <h4 style={{ display: "inline-block", float: "right" }}>
            <strong>${product.price}</strong>
          </h4>
        </div>
      </div>
    </div>
  );

  {
    /* return (
    <div styleName="product">
      <div styleName="product__info">
        <p>{product.description}</p>
        <p styleName="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div styleName="product__rating">
      
        </div>
      </div>
      <div styleName="img-wrapper">
        <img
          src={product.images[0] || DefaultImage}
          alt={product.description}
        />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  ); */
  }
};

export default CSSModules(Product, style);
