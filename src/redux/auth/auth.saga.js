import { all, call, put, takeEvery } from "redux-saga/effects";
import { loginResult } from "./auth.action";
import { loginApi } from "./auth.api";
import { Redirect } from "react-router-dom";
import types from "./auth.type";

function* loginSaga(data) {
  try {
    const res = yield call(loginApi, data);
    const user = res.data;
    const roles = res.data.roles;
    const token = res.data.token;
    localStorage.setItem("token", token);

    if (roles[0] === "ROLE_ADMIN") window.location.href = "/admin";
    else window.location.href = "/";

    // auth.currentUser?.getIdToken().then((token) => {
    //   setAuthToken(token);
    //   window.location.href = "/";
    // });

    yield put(loginResult(user));
  } catch (error) {
    console.log(error);
    const isSuccess = false;
    yield put(loginResult(error, isSuccess));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.AUTH_LOGIN, loginSaga)]);
}
