import axios from "axios";


const axiosInstance = axios.create({
        baseURL:import.meta.env.VITE_BASE_URl_AUTH_AXIOS_INSTANCE,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });


export default axiosInstance;    