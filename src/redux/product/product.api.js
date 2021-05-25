import Axios from "axios";

const PRODUCT_ENDPOINT = "http://localhost:8085/api/items";
const CHECKOUT_ENDPOINT = "http://localhost:8085/api/orders";

export const getAllProductsApi = async () => {
  return await Axios.get(`${PRODUCT_ENDPOINT}`);
};

export const getProductApi = async (id) => {
  return await Axios.get(`${PRODUCT_ENDPOINT}/${id}`);
};

export const updateProductApi = async ({ data }) => {
  return await Axios.put(`${PRODUCT_ENDPOINT}/${data.id}`, data);
};

export const deleteProductApi = async (id) => {
  return await Axios.delete(`${PRODUCT_ENDPOINT}/${id}`);
};

export const checkoutApi = async ({ data }) => {
  return await Axios.post(CHECKOUT_ENDPOINT, data);
};

export const vnpayPaymentApi = async ({ data }) => {
  console.log(data);
  return await Axios.post(
    `http://localhost:8085/api/vnpay/make`,
    {},
    {
      headers: {},
      params: {
        vnp_Amount: 1000000,
        vnp_Locale: "vn",
        vnp_OrderInfo: "Thanh+toan+don+hang",
        vnp_OrderType: "topup",
        vnp_ReturnUrl:
          "https%3a%2f%2fsandbox.vnpayment.vn%2ftryitnow%2fHome%2fVnPayReturn",
      },
    }
  );
};
