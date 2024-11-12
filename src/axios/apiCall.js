import api from "./api";

const auth = {
  login: (params) => api.post("/auth/login", params),
  getUser: (userId) => api.get(`/users/${userId}`),
};

export { auth };
