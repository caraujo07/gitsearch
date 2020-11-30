import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: "Bearer 69f41b35672b28feec5461f3358a2fb97230b4f7",
  },
});

export default api;
