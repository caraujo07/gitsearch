import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: "Bearer 95ece8fb5f2c0185e3623e454630d9b935af5a1d",
  },
});

export default api;
