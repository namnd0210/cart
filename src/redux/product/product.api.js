import Axios from "axios";

const PRODUCT_ENDPOINT = "http://localhost:8080/api/product";

export const getAllProductsApi = async () => {
  return await Axios.get(`${PRODUCT_ENDPOINT}/search`);
};

export const vnpayPaymentApi = async ({ data }) => {
  console.log(data);
  return await Axios.post(
    `http://localhost:8080/api/vnpay/make`,
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
