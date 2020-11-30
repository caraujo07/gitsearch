import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: "Bearer 42d923ed89c892197dfa0659714aad16be9f2e8d",
  },
});

export default api;
