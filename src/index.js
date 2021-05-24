import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Containers from "containers";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { store, persistor } from "redux/store";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Containers />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
