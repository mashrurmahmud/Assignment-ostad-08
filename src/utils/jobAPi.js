import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import JobaxiosInstance from "../api/Jobaxiosinstance";



export const getJob = async() => {
    
    const res = await fetch('http://localhost:5000/jobs/api/getjobs');
    if(res?.ok){
        return res.json();
    }
}

export const jobApiInfo = async(id)=>{
    console.log(id)
    const res = await fetch(`http://localhost:5000/jobs/api/getjobs/${id}`,{
        
    });
    if(res?.ok){
        return res.json();
    }else{
        throw new Error('Failed to fetch job details.');
    }

}


export const getUserAPi =async()=>{
    const res = await fetch('http://localhost:5000/auth/api/apiuser',{
        credentials:'include'
    });
    if(res?.ok){
        const data = await  res.json();
        console.log(data.message);
        return data
    }
}


export const createJob= async(postdata)=>{
    const res = JobaxiosInstance.post('/createjob',postdata)
  
    return res;
}