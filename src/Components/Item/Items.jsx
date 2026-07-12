import React from 'react';

const Items = ({category}) => {
    return (
        <div className='flex flex-col h-[300px] shadow-lg rounded-lg items-center p-4 bg-orange-300 justify-center'>
            <span>{category?.icon}</span>
            <h1 className='font-bold roboto text-white'>{category?.name}</h1>
            <p className='roboto'>{category?.position}</p>
            
        </div>
    );
};

export default Items;