import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
