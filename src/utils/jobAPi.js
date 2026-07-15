import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import JobaxiosInstance from "../api/Jobaxiosinstance";
import appliedJobInstace from "../api/appliedJobInstance";



export const getJob = async() => {
    
    const res = await fetch('https://o-stad-backend-code-assignment-08-hmc68trfi.vercel.app/jobs/api/getjobs');
    if(res?.ok){
        return res.json();
    }
}

export const jobApiInfo = async(id)=>{
    
    const res = await fetch(`https://o-stad-backend-code-assignment-08-hmc68trfi.vercel.app/jobs/api/getjobs/${id}`,{
        
    });
    if(res?.ok){
        return res.json();
    }else{
        throw new Error('Failed to fetch job details.');
    }

}


export const getUserAPi =async()=>{
    const res = await fetch('https://o-stad-backend-code-assignment-08-hmc68trfi.vercel.app/auth/api/apiuser',{
        credentials:'include'
    });
    if(res?.ok){
        const data = await  res.json();
        console.log(data.message);
        return data
    }
}


export const createJob= async(postdata)=>{
    const res = await JobaxiosInstance.post('/createjob',postdata)
  
    return res;
}


export const appliedJob=async()=>{
    const res = await appliedJobInstace.get('/applications', {withCredentials: true});
    return res
}


export const deleteAppliedJob = async(id)=>{
    console.log(id)
    const res = await appliedJobInstace.delete(`/application/${id}`,{withCredentials: true});
    return res
}

