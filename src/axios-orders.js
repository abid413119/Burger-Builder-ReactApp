import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://burger-builder-eca19.firebaseio.com/"
});

export default axiosInstance;