import { combineReducers } from "redux";
// import authReducer from "./auth/auth.reducer";
// import toastReducer from "./toast/toast.reducer";
import productReducer from "./product/product.reducer";

const reducers = combineReducers({
  // auth: authReducer,
  // toast: toastReducer,
  products: productReducer,
});

export default reducers;
