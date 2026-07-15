import axios from "axios";



 const appliedJobInstace = axios.create({
    baseURL: 'http://localhost:5000/apply/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default appliedJobInstace;