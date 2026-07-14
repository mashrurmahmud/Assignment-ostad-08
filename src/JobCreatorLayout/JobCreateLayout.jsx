import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const JobCreateLayout = () => {
    
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default JobCreateLayout;