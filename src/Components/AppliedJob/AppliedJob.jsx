import React, { useEffect, useState } from 'react';
import { appliedJob } from '../../utils/jobAPi';
import JobCart from '../Recent_jobs/JobCart';
import ApplyCart from './ApplyCart';
import { useGetAppliedJobs } from '../../utils/jobHook';


const AppliedJob = () => {

    const {data:applyjob, refetch} = useGetAppliedJobs();
    
  console.log(applyjob);

   
   






  
    
    return (
        <div>

           <h1>hello</h1>
           {
            applyjob?.data?.map((job,index) =><ApplyCart key={index} job={job} refetch={refetch}/>)
           }

           
            
            
        </div>
    );
};

export default AppliedJob;