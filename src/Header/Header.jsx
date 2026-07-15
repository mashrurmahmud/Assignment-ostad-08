import React, { useEffect } from 'react';
import './Header.css'


import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useStore';

const Header = () => {
    const {user, fetchUser,logout } = useAuthStore()
    const navigate = useNavigate();



    useEffect(()=>{
        fetchUser();

    },[fetchUser])

    const handleLogout = () => {
        logout();
        
    }
    const headerMenu = [{
        name: "Home",
        path: "/"
    },
    {
        name: "For Candidates",
        path: "/jobCreatorLayout/jobCreateform"
    },
    {
        name: "For Employeers",
        path: "/employeers"
    },
   
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name:"profile",
        path:"/dashboard/profile",
        private:true
        
    }
]

  

    const handleSignup =()=>{
        navigate('/auth/register')

    }
     const handleLogin =()=>{
        navigate('/auth/login')

    }
    return (
        <div className='flex container mx-auto rounded-lg justify-around items-center shadow-lg p-3'>
            <div>
                <img className='   w-42.5 h-17.5 object-cover' src="../../public/ChatGPT Image Jul 10, 2026, 08_52_12 PM.png" alt="job-board" />
            </div>
            <div>
                <ul className='hidden  md:flex gap-3 lg:flex'>
                    {
                        headerMenu?.map(head => {
                            if(head?.private  && !user){
                                return null
                            }
                            else{
                                return <li className='' key={head?.name}><NavLink className="px-6 py-3 inline-block" to={head.path}>{head?.name}</NavLink></li>
                            }
                        })
                    }

                   
                </ul>
                
                
               
            </div>
            
            {
                user? <div>
                <button onClick={handleLogout} className='p-3 lg:p-0 lg:w-[170px] h-[54px] lg:rounded-full bg-orange-400 text-white cursor-pointer '>Log out</button>

                </div> : <div className='space-x-3'>
                <button onClick={handleSignup} className='p-3 lg:p-0 lg:w-[170px] h-[54px] lg:rounded-full bg-red-700 text-white cursor-pointer '>Sign Up</button>
                <button onClick={handleLogin} className='p-3 lg:p-0 lg:w-[170px] h-[54px] lg:rounded-full bg-orange-400 text-white cursor-pointer '>Log In</button>
            </div>
            }

            
        </div>
    );
};

export default Header;