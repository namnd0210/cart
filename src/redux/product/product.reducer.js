import types from "./product.type";

const initState = {
  data: {},
  basket: [],
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_SUCCESS: {
      return { ...state, data: action.result.data };
    }

    case types.GET_ALL_PRODUCT_FAILED: {
      return state;
    }

    case types.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.product],
      };
    case types.REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //product exist in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product{id: ${action.id}} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}
