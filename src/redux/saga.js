import { all } from "redux-saga/effects";
// import authSagas from "./auth/auth.saga";
// import userSagas from "./user/user.saga";
import productSagas from "./product/product.saga";

export default function* rootSaga() {
  yield all([
    // authSagas(),
    // userSagas(),
    productSagas(),
  ]);
}
