import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "redux/reducers";
import { getAllProducts } from "redux/actions";
import Containers from "containers";

import "bootstrap/dist/css/bootstrap.min.css";

const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <Containers />
  </Provider>,
  document.getElementById("root")
);
