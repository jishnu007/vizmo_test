import axios from "axios";
const { VITE_APP_API_URL } = import.meta.env
console.log(import.meta.env,"envs.....")

const request = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {},
  validateStatus: function (status) {
    return true;
  },
});
export default request;