import axios from "axios";
// import qs from "querystring";
import config from "../config";

const { api } = config;

export default async function makeRequest(path) {
  return await axios
    .get(`${api.baseUrl + path}`, {})
    .then(({ status, data }) => {
      return status === 200 && data;
    })
    .catch((err) => console.error(err));
}
