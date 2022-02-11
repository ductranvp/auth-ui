import axiosModule from "axios";
import { getToken } from "../utils/token.util.js";
import { logout } from "../utils/auth.util.js";
import { showMessage } from "../utils/message.util.js";

const baseURL = process.env.APP_API_ENDPOINT;

const axios = axiosModule.create({
  baseURL,
  timeout: 10000,
});

axios.interceptors.request.use(
  function (config) {
    config.headers["authorization"] = "Bearer " + getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.message === "Network Error") {
      showMessage("Network Error", "error");
    }
    if (error.response?.status === 401) {
      await logout();
    }
    return Promise.reject(error);
  }
);

export default axios;
