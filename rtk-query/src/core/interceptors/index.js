import axios from "axios";

let axiosInstance;
const httpRequest = () => {
  axiosInstance = axios.create();
  return axiosInstance;
};

export { httpRequest };
