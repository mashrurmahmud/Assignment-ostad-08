import React from 'react';

const FeaturedCity_Card = ({cities}) => {
    return (
        <div className='relative shadow-lg p-3 rounded-lg overflow-hidden'>
            <img className='w-full h-[250px] city_image object-cover' src={cities?.image} alt="" />
            <h1 className='absolute top-2 text-2xl roboto font-bold text-white'>{cities?.name}</h1>
            
        </div>
    );
};

export default FeaturedCity_Card;