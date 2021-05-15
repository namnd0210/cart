import Axios from "axios";

const PRODUCT_ENDPOINT = "http://localhost:8085/api/product";

export const getAllProductsApi = async () => {
  return await Axios.get(`${PRODUCT_ENDPOINT}/search`);
};
