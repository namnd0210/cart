import Axios from "axios";

const AUTH_ENDPOINT = "http://localhost:8085/api/auth/login";

export const loginApi = ({ data }) => Axios.post(`${AUTH_ENDPOINT}`, data);
