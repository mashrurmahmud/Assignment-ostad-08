import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const AuthLayOut = () => {
    return (
        <>
           <header>
             <Header/>
           </header>
           <main className=''>
             <Outlet/>
           </main>
           <footer>
             <Footer/>
           </footer>
            
        </>
    );
};

export default AuthLayOut;