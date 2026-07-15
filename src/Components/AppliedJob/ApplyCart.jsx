import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDeleteApplyJob } from '../../utils/jobHook';

const ApplyCart = ({job}) => {

    const deleteJob = useDeleteApplyJob()

    const {refetch} = deleteJob

    const handleDelete = async(id) => {
       
      const res = await  deleteJob.mutateAsync(id);

      refetch

      if(res?.status === 200){
        alert('Job deleted successfully');
      }

        
    }



    return (
           <div className='relative space-y-4 shadow-lg p-3 rounded-lg'>
           <div className='flex items-center gap-2'>
             <div>
                <img className='w-25 h-25 rounded-full shadow-lg' src={job?.jobId?.logo} alt="" />
             </div>
             <div>
                <Link to={`/jobinfo/${job?.jobId?._id}`}><h1 className='text-[30px] font-bold roboto'>{job?.jobId?.title}</h1></Link>
                <p className='roboto '>{job?.jobId?.jonlocation},  <i className="fa-solid fa-tag"></i> {job?.jobId?.type}  </p>
             </div>
           </div>
           <div className='flex items-center justify-between'>
            <div>
                <button className='bg-sky-400 text-white p-2 rounded-lg'>{job?.jobId?.type}</button>
            </div>
            <div>
                <p className='font-bold roboto'>{job?.jobId?.salary}</p>
            </div>
            
           </div>
           <div className='absolute top-4 right-5'>
             <CiCircleRemove onClick={()=>handleDelete(job?._id)} size={30} className='cursor-pointer' />
           </div>
            
        </div>
    );
};

export default ApplyCart;