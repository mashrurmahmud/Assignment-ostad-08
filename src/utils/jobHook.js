import { useQuery } from "@tanstack/react-query"
import { getJob, jobApiInfo } from "./jobAPi"



export const useGetJobs = ()=>{
    return useQuery({
        queryKey:['jobs'],
        queryFn: async()=>{
          return   await  getJob();
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