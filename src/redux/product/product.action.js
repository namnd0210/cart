// import { CreateAccount } from "./email.api";
import types from "./product.type";

export const getAllProducts = () => ({
  type: types.GET_ALL_PRODUCT,
});

export const getAllProductsResult = (result, isSuccess = true) => ({
  type: isSuccess
    ? types.GET_ALL_PRODUCT_SUCCESS
    : types.GET_ALL_PRODUCT_FAILED,
  result: result,
});
