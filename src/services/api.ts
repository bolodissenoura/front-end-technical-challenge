import axios from "axios";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/8c35bbb1-eed6-4eeb-aa83-1132b5830f57",
});

export default api;