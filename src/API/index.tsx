import axios from 'axios';

export const axiosHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL + 'api',
});
