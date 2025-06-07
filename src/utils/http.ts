import axios from "axios";

export const httpInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
})


//拦截器

httpInstance.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error)
})


httpInstance.interceptors.response.use(res => {
    return res.data;
}, error => {
    Promise.reject(error)
})

export default httpInstance;