import React from 'react';
import './Header.css'


import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const headerMenu = [{
        name: "Home",
        path: "/"
    },
    {
        name: "For Candidates",
        path: "/candidates"
    },
    {
        name: "For Employeers",
        path: "/employeers"
    },
   
    {
        name: "Blog",
        path: "/blog"
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
                        headerMenu?.map(head => <li className=' my_menu' key={head?.name}><NavLink className="px-6 py-3 inline-block" to={head.path}>{head?.name}</NavLink></li>)
                    }
                </ul>
               
            </div>
            <div className='space-x-3'>
                <button onClick={handleSignup} className='p-3 lg:p-0 lg:w-[170px] h-[54px] lg:rounded-full bg-red-700 text-white cursor-pointer '>Sign Up</button>
                <button onClick={handleLogin} className='p-3 lg:p-0 lg:w-[170px] h-[54px] lg:rounded-full bg-orange-400 text-white cursor-pointer '>Log In</button>
            </div>

            
        </div>
    );
};

export default Header;