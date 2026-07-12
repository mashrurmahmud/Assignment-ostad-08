import React from 'react';
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner';
import './HomeBanner/HomeBanner.css'
import Categories from './Categories/Categories';
import Featured_cities from '../Featured_cities/Featured_cities';
import Recent_jobs from './Recent_jobs/Recent_jobs';

const Home = () => {

    const countNumber = [ {
         count_number:'+'+ 1800,
         name:'Jobs Posted'
    },
    {
        count_number:'+'+ 800,
        name:'Tasks Posted'

    },
]
    return (
        <div className=' container mx-auto '>
            <HomeBanner/>

            <h1 className='lg:text-[40px] text-[20px]  montesserat container mx-auto font-bold '>Our Populer Categories</h1>
            <hr />

           <div className='flex gap-2 container mx-auto'>
              {countNumber.map(count => (
                <div className='shadow-lg p-3 rounded-lg'>
                    <h1 className='text-[30px]  montesserat container mx-auto font-bold '>{count?.count_number}</h1>
                    <p>{count?.name}</p>
                </div>
            ))}
           </div>

            <Categories/>
            <h1 className='roboto font-bold text-[40px] text-center'>Our Featured Cities</h1>
            <Featured_cities/>
            <h1 className='roboto font-bold lg:text-[40px] text-[20px] text-center'>Our Recent Jobs</h1>
            <Recent_jobs/>
            
        </div>
    );
};

export default Home;