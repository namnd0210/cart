import types from "./auth.type";

const initState = {
  user: {},
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS: {
      console.log(action);
      return { ...state, user: action.data };
    }

    case types.AUTH_LOGOUT: {
      return initState;
    }

    default:
      return state;
  }
}
