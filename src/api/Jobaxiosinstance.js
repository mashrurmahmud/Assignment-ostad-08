import axios from "axios";


const JobaxiosInstance = axios.create({
        baseURL: 'http://localhost:5000/jobs/api',
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });


export default JobaxiosInstance;