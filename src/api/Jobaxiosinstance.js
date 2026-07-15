import axios from "axios";


const JobaxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL_JOB_AXIOS_INSTANCE,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });


export default JobaxiosInstance;