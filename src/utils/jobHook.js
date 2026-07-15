import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { appliedJob, createJob, deleteAppliedJob, getJob, getUserAPi, jobApiInfo } from "./jobAPi"



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


export const useDeleteApplyJob = ()=>{
    const queryClient = useQueryClient();
   return  useMutation({
        mutationFn: async(id)=>{
            return await deleteAppliedJob(id)
        },
        onMutate:async(id)=>{
            await queryClient.cancelQueries(['appliedjobs'])

        },
        onSuccess:()=>{
            queryClient.invalidateQueries(['jobs'])
        }
    })
}

export const useGetAppliedJobs = ()=>{
    return useQuery({
        queryKey:['appliedjobs'],
        queryFn: async()=>{
            return await appliedJob();
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