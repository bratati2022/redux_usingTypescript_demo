import axios from "axios";
export const baseURL = "https://car-auction-assignment.herokuapp.com/"; //development

// export const course_storagePath = baseURL + "/storage/";
let axiosInstance = axios.create({
  baseURL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default axiosInstance;
