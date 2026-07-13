import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileMenu = ({data}) => {
    return (
        <div className='w-full'>
            <ul>
            <li className='p-3  border  border-sky-500'><NavLink to={data?.path}>{data?.data}</NavLink></li>
              
            </ul>


            
        </div>
    );
};

export default ProfileMenu;