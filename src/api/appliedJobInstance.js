import axios from "axios";



 const appliedJobInstace = axios.create({
    baseURL: import.meta.env.VITE_BASE_URl_APPLIED_JOB_INSTANSE,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default appliedJobInstace;