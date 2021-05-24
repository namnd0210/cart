import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CSSModules from "react-css-modules";
import style from "../styles/right-panel.module.scss";
import Product from "./Product";
import { getAllProducts } from "redux/product/product.action";

const bannerImg =
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";

const RightPanel = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector(({ products: { data } }) => data);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div styleName="home">
      <img styleName="home__image" src={bannerImg} alt="" />

      {/*product id, title, price, rating */}
      <div styleName="home__row">
        {products?.length > 0 &&
          products.map((product) => {
            return <Product product={product} />;
          })}
      </div>
    </div>
  );
};

export default CSSModules(RightPanel, style);
