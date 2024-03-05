import axios from "axios";

const BASE_URL = axios.create({
  baseURL: `https://stories-3e685-default-rtdb.firebaseio.com/`,
});

export default BASE_URL;