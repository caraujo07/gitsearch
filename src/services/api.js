import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  auth: {
    username: "caraujo07",
    password: "Ce87233062"
  }
});

export default api;
