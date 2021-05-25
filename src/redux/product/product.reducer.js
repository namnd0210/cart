import types from "./product.type";

const initState = {
  data: {},
  basket: [],
  currentProduct: {},
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_SUCCESS: {
      return { ...state, data: action.result.data };
    }

    case types.GET_PRODUCT_SUCCESS: {
      return { ...state, currentProduct: action.result.data.data };
    }

    case types.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: state.data.data.filter((item) => item.id !== action.id),
      };
    }

    case types.GET_ALL_PRODUCT_FAILED: {
      return state;
    }

    case types.ADD_TO_BASKET: {
      const { product } = action;
      const indexProduct = state.basket.findIndex(
        (item) => item.id === product.id
      );

      if (indexProduct === -1)
        return {
          ...state,
          basket: [...state.basket, { ...action.product, amount: 1 }],
        };

      return {
        ...state,
        basket: state.basket.map((item, index) =>
          index === indexProduct ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    }

    case types.REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
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

    case types.PRODUCT_INCREMENT: {
      const { product } = action;
      const indexProduct = state.basket.findIndex(
        (item) => item.id === product.id
      );

      if (indexProduct === -1)
        return {
          ...state,
          basket: [...state.basket, { ...action.product, amount: 1 }],
        };

      return {
        ...state,
        basket: state.basket.map((item, index) =>
          index === indexProduct ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    }

    case types.PRODUCT_DECREMENT: {
      const { product } = action;
      const indexProduct = state.basket.findIndex(
        (item) => item.id === product.id
      );

      if (state.basket[indexProduct].amount === 1) {
        return {
          ...state,
          basket: state.basket.filter((item, index) => index !== indexProduct),
        };
      }

      return {
        ...state,
        basket: state.basket.map((item, index) =>
          index === indexProduct ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    }

    default:
      return state;
  }
}
