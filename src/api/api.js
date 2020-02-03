import axios from "axios";

const api = axios.create({
  baseURL: "https://statistik-a.herokuapp.com/api",
  // baseURL: "http://localhost:8000/api",
  // timeout: 10000,
  // transformRequest: [data => JSON.stringify(data.data)],
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});


export const getMuestras = () => api.get("/Data");
export const postMuestra = content => api.post("/muestra", content);

const apis = {
  getMuestras,
  postMuestra
};

export default apis;
