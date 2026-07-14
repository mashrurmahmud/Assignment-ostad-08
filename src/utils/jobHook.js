import { useMutation, useQuery } from "@tanstack/react-query"
import { createJob, getJob, getUserAPi, jobApiInfo } from "./jobAPi"



export const useGetJobs = ()=>{
    return useQuery({
        queryKey:['jobs'],
        queryFn: async()=>{
          return   await  getJob();
        }
    })
  
}

export const useGetAPIuser =()=>{
    return useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            return await getUserAPi()
        }
    })
}

export const useCreateJob = ()=>{
    return useMutation({
        mutationFn: async(postdata)=>{
            return await createJob(postdata)
        }
    })
}

export const useGetJobsInfo = (id)=>{
    return useQuery({
        queryKey:['job',id],
        queryFn:async()=>{
            return await jobApiInfo(id);
        },
        enabled:!!id
    })
}