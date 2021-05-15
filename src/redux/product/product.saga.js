import { all, call, put, takeEvery } from "redux-saga/effects";

import { getAllProductsResult } from "./product.action";
import { getAllProductsApi } from "./product.api";
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

export default function* rootSaga() {
  yield all([takeEvery(types.GET_ALL_PRODUCT, getAllProductsSaga)]);
}
