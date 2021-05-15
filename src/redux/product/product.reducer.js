import types from "./product.type";

const initState = {
  products: {},
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_SUCCESS: {
      return { ...state, ...action.result };
    }

    case types.GET_ALL_PRODUCT_FAILED: {
      const { result } = action;
      return { ...state };
    }

    default:
      return state;
  }
}
