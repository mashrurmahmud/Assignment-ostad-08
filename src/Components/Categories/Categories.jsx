import React from 'react';
import Items from '../Item/Items';
import { CiBezier, CiLocationArrow1 } from 'react-icons/ci';
import { PiLinktreeLogoBold } from 'react-icons/pi';
import { IoIosPaper } from 'react-icons/io';
import { FaCloudDownloadAlt, FaLaptopCode } from 'react-icons/fa';
import { AiOutlineTranslation } from 'react-icons/ai';
import { SiContentstack } from 'react-icons/si';

const Categories = () => {
    const categories =[{
        name:"Design ART & Multimedia",
        position:'198 open positions',
        icon:<CiLocationArrow1 size={30} />
    },
    {
        name:"Education & Training",
        position:'198 open positions',
        icon:<PiLinktreeLogoBold size={30} />
    },
    {
        name:"Health & Care",
        position:'198 open positions',
        icon:<IoIosPaper size={30}/>
    },
    {
        name:"IT & Software",
        position:'198 open positions',
        icon:<FaLaptopCode size={30}/>
    },
    {
        name:"Human Resource",
        position:'198 open positions',
        icon:<FaCloudDownloadAlt size={30} />
    },
    {
        name:"Sales & Marketing",
        position:'198 open positions',
        icon:<CiBezier size={30}/>
    },
    {
        name:"Writing & Translation",
        position:'198 open positions',
        icon:<AiOutlineTranslation size={30} />
    },
    {
        name:"Content Marketing",
        position:'198 open positions',
        icon:<SiContentstack size={30} />
    },
]
    return (
        <div className='grid mt-5 m-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
            {
                categories?.map((category,index) => <Items category={category} key={index}/>)
            }

            
        </div>
    );
};

export default Categories;