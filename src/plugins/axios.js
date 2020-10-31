
import axios from 'axios';
const API_URL =  process.env.VUE_APP_API_URL;

export function Api () {
    const instance = axios.create({ baseURL: API_URL });
    instance.interceptors.request.use(async function (request) {
        return request;
    }, function (error) {
        return Promise.reject(error);
    });
    instance.interceptors.response.use(function (response) {
        return response.data;
    }, function (error) {
        return Promise.reject(error);
    });
    return instance;
}