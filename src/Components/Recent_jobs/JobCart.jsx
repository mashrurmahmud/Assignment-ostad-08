import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { TbBadgeFilled } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const JobCart = ({job}) => {
    

    return (
        <div className='relative space-y-4 shadow-lg p-3 rounded-lg'>
           <div className='flex items-center gap-2'>
             <div>
                <img className='w-25 h-25 rounded-full shadow-lg' src={job?.logo} alt="" />
             </div>
             <div>
                <Link to={`/jobinfo/${job?._id}`}><h1 className='text-[30px] font-bold roboto'>{job?.title}</h1></Link>
                <p className='roboto '>{job?.location},  <i className="fa-solid fa-tag"></i> {job?.type}  </p>
             </div>
           </div>
           <div className='flex items-center justify-between'>
            <div>
                <button className='bg-sky-400 text-white p-2 rounded-lg'>{job?.type}</button>
            </div>
            <div>
                <p className='font-bold roboto'>{job?.salary}</p>
            </div>
            
           </div>
           <div className='absolute top-4 right-5'>
             <CiHeart size={30} className='cursor-pointer' />
           </div>
            
        </div>
    );
};

export default JobCart;