import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "http://localhost:3040/",
});

export default axiosInstace;
