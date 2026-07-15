import React from 'react';
import Header from '../Header/Header';
import ProfileMenu from './ProfileMenu';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const DashboardLayout = () => {

    const profileData = [{data:'Profile',path:'/dashboard/profile'},{data:'Applied Job',path:'/dashboard/applied-job'},{data:'Saved Job',path:'/dashboard/saved-job'}]
    return (
        <div className='container  mx-auto'>
            <Header/>
             <div className='flex justify-center  gap-2'>
                 <div>
                 <div className='sticky letf-0 top-0 h-[500px] w-72 border-sky-500 border shadow-lg'>

             {
                 profileData.map((data,index)=><ProfileMenu data={data} key={index}/>)

             }



            </div>
            </div>
            <div className='w-full   h-auto  mx-auto'>
                <Outlet/>
            </div>
             </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default DashboardLayout;