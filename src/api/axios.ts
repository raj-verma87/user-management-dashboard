import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    console.log(
      "Request:",
      config.method,
      config.url
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(
      "Response:",
      response.status
    );

    return response;
  },
  (error) => {
    if (
      error.response?.status === 401
    ) {
      localStorage.removeItem(
        "token"
      );

      window.location.href =
        "/login";
    }

    return Promise.reject(error);
  }
);

