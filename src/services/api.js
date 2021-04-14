import axios from "axios";

const api = axios.create({
    baseURL: `data`
});

export default api;