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

export const getProduct = (id) => ({
  type: types.GET_PRODUCT,
  id,
});

export const deleteProduct = (id) => ({
  type: types.DELETE_PRODUCT,
  id,
});

export const deleteProductResult = (id, isSuccess = true) => ({
  type: isSuccess ? types.DELETE_PRODUCT_SUCCESS : types.DELETE_PRODUCT_FAILED,
  id,
});

export const getProductResult = (result, isSuccess = true) => ({
  type: isSuccess ? types.GET_PRODUCT_SUCCESS : types.GET_PRODUCT_FAILED,
  result: result,
});

export const vnpayPayment = () => ({
  type: types.VNPAY_PAYMENT,
});

export const vnpayPaymentResult = (result, isSuccess = true) => ({
  type: isSuccess ? types.VNPAY_PAYMENT_SUCCESS : types.VNPAY_PAYMENT_FAILED,
  result: result,
});

export const checkout = (data) => ({
  type: types.CHECKOUT,
  data,
});
