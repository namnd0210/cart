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
