import axios from "axios";

const baseURL = "https://example.com/api";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized - Redirecting to login");
    }
    return Promise.reject(error);
  },
);

export default api;

// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// const baseURL = "https://example.com/api";

// const api = axios.create({
//   baseURL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // const token = localStorage.getItem("token");
//     // if (token) {
//     //   config.headers["Authorization"] = `Bearer ${token}`;
//     // }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       console.log("Unauthorized - Redirecting to login");
//     }
//     return Promise.reject(error);
//   },
// );

// export default api;
