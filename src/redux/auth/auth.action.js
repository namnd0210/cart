import types from "./auth.type";

export const login = (data) => ({
  type: types.AUTH_LOGIN,
  data,
});

export const loginResult = (data, isSuccess = true) => ({
  type: isSuccess ? types.AUTH_LOGIN_SUCCESS : types.AUTH_LOGIN_FAILED,
  data,
});

export const logOut = () => ({
  type: types.AUTH_LOGOUT,
});
