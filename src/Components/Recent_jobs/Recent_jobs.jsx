import React from 'react';
import { useGetJobs } from '../../utils/jobHook';
import { CircularProgress } from '@mui/material';
import JobCart from './JobCart';

const Recent_jobs = () => {
    const {data, isLoading} = useGetJobs();

    if(isLoading) return <div className='flex justify-center h-screen items-center'>
     <CircularProgress aria-label="Loading…" />
    </div>;
    console.log(data);
    return (
        <div className='relative m-4'>
           {
             data?.slice(0,5)?.map((job,index) =><JobCart key={index} job={job}/>)
           }

           <div className='absolute right-0 -top-9 lg:top-2'>
              <button className='lg:w-[200px] w-[100px] text-white cursor-pointer p-3 bg-sky-500 text-[10px] lg:text-[20px] h-auto lg:h-auto'>Browse All Jobs</button>
           </div>
            
        </div>
    );
};

export default Recent_jobs;