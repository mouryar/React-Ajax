import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.defaults.headers.common['Autherization'] = 'AUTH_TOKEN_FROM_AXIOS';
axiosInstance.interceptors.request.use(request => {
    console.log(request);
    return request;
})

export default axiosInstance;