import React, { useEffect } from 'react';
import './JobInfo.css'
import { useLocation, useParams } from 'react-router-dom';
import { useGetJobsInfo } from '../../utils/jobHook';
import { CircularProgress } from '@mui/material';

const Jobinfo = () => {
    const {id} = useParams();
    const { path} = useLocation()
    console.log(id);
    useEffect(() => {
        window.scrollTo(0, 0);

    })
    const getJobInfo = useGetJobsInfo(id);
    if(getJobInfo?.isLoading) return <div className='flex justify-center h-screen items-center'><CircularProgress aria-label="Loading…" /></div>;

    console.log(getJobInfo);
    
    return (
      <div className='container mx-auto ml-5 mr-5 '>
          <div className='jobBanner  relative'>

            <div className='absolute inset-0  bg-black/40 '></div>
            <h1 className='text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[65px] hidden lg:block '>Job Info</h1>
        </div>
         <div className='flex gap-1'>
             <div className='w-full lg:w-1/2 shadow-lg p-3'>
            <img className='w-full hidden lg:block h-auto object-cover' src="../../../public/pexels-tima-miroshnichenko-6913340.jpg" alt="" />
            <h1 className='text-[20px] lg:text-[40px] lg:text-left text-center'>Job details</h1>
            <p className='text-red-600 font-bold'>Location:{getJobInfo?.data?.location}</p>
        </div>
        <div className='w-full lg:w-1/2'>
            <h1 className='text-[50px] roboto font-bold'>{getJobInfo?.data?.title}</h1>
            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum incidunt vel voluptatibus, facere ipsam maiores at? Asperiores maiores doloribus neque obcaecati eos minima itaque autem accusamus in, quasi quia, ex vitae expedita commodi mollitia ea dolorum at voluptatibus harum modi quaerat iste a. Fuga qui possimus sapiente repellat placeat?</p>
            <h1 className='text-[25px] font-bold'>Job description:</h1>
            <p>{getJobInfo?.data?.description}</p>
            <p className='text-[25px] font-bold'>Company:{getJobInfo?.data?.company}</p>
            <h1 className='text-[25px] font-bold'>How to Apply</h1>
            <p className='roboto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus expedita aliquam distinctio, quas non ut tempore illum eligendi perferendis at error accusamus nihil numquam laboriosam illo. Laborum, enim dicta!</p>
            <h1 className='text-[25px] font-bold'>Job Requirements</h1>
            <ul>
                {getJobInfo?.data?.requirements?.map((requirement,index) => <li className='roboto' key={index}>{requirement}</li>)}
            </ul>
            <div className='my-3'>
                <button className='bg-sky-400 w-[200px] h-auto cursor-pointer text-white p-2 rounded-lg active:bg-black'>Apply</button>
            </div>

        </div>
         </div>
      </div>
    );
};

export default Jobinfo;