import axios, { AxiosInstance } from 'axios';

const API_KEY = 'c0efcf789849446bbc23387a4e39080a';
const BASE_URL = 'https://rawg.io/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
