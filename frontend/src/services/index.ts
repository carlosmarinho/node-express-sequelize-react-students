import axios from "axios";

export const URL_API = "http://localhost:5000/";

export default axios.create({
  baseURL: URL_API,
});
