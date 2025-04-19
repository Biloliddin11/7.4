import axios from "axios";

const api = axios.create({
    baseURL: "https://green-shop-backend.onrender.com/api/flower/category?access_token=6506e8bd6ec24be5de357927",
});

export default api;