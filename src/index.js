import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { getAllProducts } from "./redux/product/product.action";
import Containers from "containers";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";

import { store, persistor } from "redux/store";

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Containers />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
