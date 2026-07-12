import React from 'react';
import FeaturedCity_Card from './FeaturedCity_Card';

const Featured_cities = () => {
    const city =[{
        name:'Dhaka',
        image:'https://i.ibb.co.com/Jjn6mZ09/al-amin-mir-JCt-BOf-MFc4c-unsplash.jpg'
    }, 
    {
        name:'Chittagong',
        image:'https://i.ibb.co.com/ymNjy6RR/chittagong.jpg'
    }, 
     {
        name:'Barisal',
        image:'https://i.ibb.co.com/pB2Lh3YG/moyen-ahmed-BAXq-Cu-Uc-QEw-unsplash.jpg'
    },
    {
        name:'Rajshahi',
        image:'https://i.ibb.co.com/ycfzLqCd/mahadi-hasan-s-photography-8drfl-Dcvkg-I-unsplash.jpg'
    },
    {
        name:'Khulna',
        image:'https://i.ibb.co.com/XBs7t32/aerfan-uddin-h-Jgkk5-ZTA8-unsplash.jpg'
    }
]
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
         {
            city?.map((cities,i) => <FeaturedCity_Card key={i} cities={cities}/>)
         }
            
        </div>
    );
};

export default Featured_cities;