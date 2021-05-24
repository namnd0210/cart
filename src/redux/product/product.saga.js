import { all, call, put, takeEvery } from "redux-saga/effects";
import toast from "react-hot-toast";
import { getAllProductsResult, vnpayPaymentResult } from "./product.action";
import { getAllProductsApi, vnpayPaymentApi, checkoutApi } from "./product.api";
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

function* checkoutSaga(data) {
  try {
    const res = yield call(checkoutApi, data);
    const { status } = res;
    if (status === 200) {
      toast.success("Successfully created!");
    }
  } catch (error) {
    console.log(error);
    toast.error("This is an error!");
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_ALL_PRODUCT, getAllProductsSaga),
    takeEvery(types.VNPAY_PAYMENT, vnpayPaymentSaga),
    takeEvery(types.CHECKOUT, checkoutSaga),
  ]);
}
