import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 6000,
});

request.interceptors.request.use(
  (value) => {
    return value;
  },
  (error) => {}
);

request.interceptors.response.use(
  (value) => {
    return value;
  },
  (error) => {}
);
