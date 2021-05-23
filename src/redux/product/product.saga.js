import { all, call, put, takeEvery } from "redux-saga/effects";

import { getAllProductsResult, vnpayPaymentResult } from "./product.action";
import { getAllProductsApi, vnpayPaymentApi } from "./product.api";
import types from "./product.type";

function* getAllProductsSaga() {
  try {
    const res = yield call(getAllProductsApi);

    yield put(getAllProductsResult(res));
  } catch (error) {
    console.log(error);
    const isSuccess = false;
    yield put(getAllProductsResult(error, isSuccess));
  }
}

function* vnpayPaymentSaga() {
  try {
    const res = yield call(vnpayPaymentApi, { data: "1" });

    const { redirect_url } = res.data;
    console.log(redirect_url);

    yield put(vnpayPaymentResult(res));
    window.open(redirect_url, "_blank");
  } catch (error) {
    console.log(error);
    const isSuccess = false;
    yield put(vnpayPaymentResult(error, isSuccess));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_ALL_PRODUCT, getAllProductsSaga),
    takeEvery(types.VNPAY_PAYMENT, vnpayPaymentSaga),
  ]);
}
