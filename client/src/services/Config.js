import axios from "axios";

export const Config = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: '',
});