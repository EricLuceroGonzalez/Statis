import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api"
});

export const getMuestras = () => api.get("/muestras");
export const postMuestra = content => api.post("/muestra", content);

const apis = {
  getMuestras,
  postMuestra
};

export default apis;
