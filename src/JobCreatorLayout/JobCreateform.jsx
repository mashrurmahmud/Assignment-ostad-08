import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateJob } from '../utils/jobHook';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const jobholder = z.object({
    title:z.string().min(2, { message: " must be at least 2 or 3  characters long" }),
    description:z.string().min(200, { message: " description must be at least 200 word  characters long" }),
    company:z.string().min(2, { message: " Company must be required" }),
    location:z.string().min(10, { message: " location must be required" }),
    // skills:z.string().min(2, { message: " skills must be required" }),
    type:z.string().min(2, { message: " type must be required" }),
    salary:z.string(),
    experience:z.string().min(0, { message: " experience must be required" }),
    // benefits:z.string().min(2, { message: " benifits must be required" }),
    logo:z.any(),
    


    

    
})


//  const user = z.object({
//         name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
//         email: z.string().email({ message: "Enter a valid email address" }),
//         password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
//         username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
//         confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
//     }).refine((data) => data.password === data.confirmPassword, {
//         message: "Passwords do not match",
//         path: ["confirmPassword"],
//     });

const JobCreateform = () => {
    const navigate = useNavigate()
    const creatingJob = useCreateJob();
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver:zodResolver(jobholder)
    });

    const image_api_key = '7011f7047816452805e48c4b506e7c1c';
    const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;
    const [company_skills, setCompany_skills] = useState('');

    const [skillsArray, setSkills] = useState([]);
    const [imgbb, setImgbb] = useState('');

    const [benifits, setBenifits] = useState([]);
    const [company_benifits, setCompany_benifits] = useState('');
    const [loading, setLoading] = useState(false);


    
    const handleAddBenifits = (e)=>{
        e.preventDefault();
        setBenifits([...benifits, company_benifits]);
        setCompany_skills('');
        
        
    }

 
    const handleDeleteBenefits = (benifit)=>{
        const delete_benifits = benifits.filter(b => b !== benifit);
        setBenifits(delete_benifits);
    }


    const handleSkills = (e)=>{
        e.preventDefault();
        setSkills([...skillsArray, company_skills]);
        setCompany_skills('');
       
    }

    const handleDeleteSkills = (skill)=>{
        const delete_skills = skillsArray.filter(s => s !== skill);
        setSkills(delete_skills);
    }
    const handleImage = async(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        const res = await axios.post(image_upload_url, formData);
        console.log(res)
        if(!res){
            setLoading(true)
        }else{
            setLoading(false)
        }
        const imageUrl = res?.data?.data?.display_url || 'Loading...';
        console.log(imageUrl);
        
        setImgbb(imageUrl);
        
    }
    const onSubmit = async(data) => {
        console.log('vat kaico')
       
        const {skills, benifits, logo, ...rest} = data;

       

        
       


    

       const finalData = {...rest, skillsArray, benifits, logo:imgbb};
       try{
      
        const store = await creatingJob.mutateAsync(finalData);
       
        Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed){
             Swal.fire("Saved!", "", "success");
             navigate('/');
        }
        
        else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
       }catch(err){
         console.log(err);
       }

      

      


       

    }


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Post a New Job
        </h2>


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Job Title */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              {...register('title')}
              placeholder="Frontend Developer"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors?.title && <p className='text-red-500'>{errors?.title.message}</p>}
          </div>

          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut nisi iusto fugit quia quo nihil recusandae nemo voluptatibus voluptates ratione facere dignissimos earum, beatae accusantium optio veniam nam voluptatum perferendis similique doloremque explicabo. Quaerat, ut! Minus rem magni accusantium consectetur asperiores, eligendi assumenda, quos quibusdam aperiam voluptates praesentium fugiat eos recusandae, corrupti hic? Adipisci ut sint rerum id tempora repudiandae nobis. Aut officiis inventore blanditiis, natus vitae unde ipsa, repellat ea numquam, recusandae minima? Iste ullam, aliquam exercitationem nulla incidunt quod veritatis ut animi sunt ratione doloremque mollitia minus perspiciatis minima quidem doloribus optio consequatur cupiditate unde porro cumque quos, dolorum magnam fugiat? Doloribus totam dolorum atque expedita! Dignissimos hic quam id dolore nostrum amet quisquam esse alias dolor, consequatur neque incidunt expedita fugit distinctio dolorem molestias cupiditate cumque sapiente, eum cum maxime quia natus quidem. Deleniti dolorum, saepe recusandae, harum quis molestias et in amet repudiandae eligendi vitae nesciunt? Magnam veritatis dolore, ducimus cumque ullam asperiores odio dignissimos repudiandae obcaecati eius quod nesciunt. Quos, voluptates architecto eligendi a ea delectus tempora, non iusto debitis praesentium deleniti ratione? Placeat eligendi est explicabo adipisci. Quod modi dolorum eaque ut atque tempora dolorem et nesciunt dolores quasi, molestiae praesentium consequatur dolor. */}
          

          {/* Company & Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
               
                {...register('company')}
                placeholder="Google"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
               {errors.company && <p className='text-red-500'>{errors.company.message}</p>}
            </div>
           

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
               
                {...register('location')}
                placeholder="New York, USA"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors?.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>
          </div>

          {/* Job Type & Salary */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Job Type
              </label>

              <select
                name="type"
                {...register('type')}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Type</option>
                <option value='full-time'>Full Time</option>
                <option value='part-time'>Part Time</option>
                <option value='remote'>Remote</option>
                <option value='hybrid'>Hybrid</option>
                <option value='internship'>Internship</option>
                <option value='contact'>Contract</option>
              </select>
              {errors?.type && <p className='text-red-500'>{errors.type.message}</p>}
            </div>
            

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Salary
              </label>
              

              <input
                type="text"
             
                {...register('salary')}

                placeholder="$3000 - $5000"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>
            {/* logo */}
           {
             imgbb? (<div>
              <img className='w-25 h-25 rounded-full shadow-lg border-2 border-sky-600' src={imgbb } alt="the image logo" />
             </div>):( <div>
              <label className="block mb-2 font-medium text-gray-700">
                Company Logo
              </label>
              <input
                type="file"
               
                {...register('logo')}
                onChange={handleImage}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors?.logo && <p className='text-red-500'>{errors.logo.message}</p>}
            </div>)
           }


          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Experience
            </label>

            <select 
              {...register('experience')}
              
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Experience</option>
              <option value='fresher'>Fresher</option>
              <option value='1'>1 Year</option>
              <option value='2'>2 Years</option>
              <option value='3'>3 Years</option>
              <option value='5+'>5+ Years</option>
              <option value='10+'>10+ Years</option>
            </select>
            {errors.experience && <p className='text-red-500'>{errors.experience.message}</p>}
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Required Skills
            </label>

            <input
              type="text"
              name="skills"
              {...register('skills')}
              value={company_skills}
              onChange={(e) => setCompany_skills(e.target.value)}
              placeholder="React, Node.js, MongoDB, Tailwind CSS"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.skills && <p className='text-red-500'>{errors.skills.message}</p>}
           <div className='my-3'>
             <button onClick={handleSkills} className='bg-sky-500  hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg transition'>ADD</button>
           </div>
          



            <p className="text-sm text-gray-500 mt-2">
              Separate skills using commas (,)
            </p>
            <ul>
              {skillsArray.map((skill, index) => (
                <li className="bg-black relative p-3 m-3 text-white" key={index} >
                  {skill}
                <div className='absolute top-2 right-2 cursor-pointer'>
                 <button onClick={()=>handleDeleteSkills(skill)}><i className="fa-solid fa-circle-xmark text-white"></i></button>
                 </div>
                </li>
              ))}
            
            </ul>

            
          </div>


            <div>
            <label className="block mb-2 font-medium text-gray-700">
              Benifits
            </label>

            <input
              type="text"
              
              {...register('benefits')}
              value={company_benifits}
              onChange={(e) => setCompany_benifits(e.target.value)}
              placeholder="React, Node.js, MongoDB, Tailwind CSS"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.benifits && <p className='text-red-500'>{errors?.benifits?.message}</p>}
           <div className='my-3'>
             <button onClick={handleAddBenifits} className='bg-sky-500  hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg transition'>ADD</button>
           </div>
          



            <p className="text-sm text-gray-500 mt-2">
              Separate skills using commas (,)
            </p>
            <ul>
              {benifits.map((benifit, index) => (
                <li className="bg-black relative p-3 m-3 text-white" key={index} >
                  {benifit}
                <div className='absolute top-2 right-2 cursor-pointer'>
                 <button onClick={()=>handleDeleteBenefits(benifit)}><i className="fa-solid fa-circle-xmark text-white"></i></button>
                 </div>
                </li>
              ))}
            
            </ul>

            
          </div>


          

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Job Description
            </label>

            <textarea
              name="description"
              {...register('description')}

              rows="6"
              placeholder="Describe the responsibilities, qualifications, and benefits..."
              className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
          </div>

          {/* Submit */}
          <div className="text-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Post Job
            </button>
          </div>

        </form>
      </div>
    </div>
    );
};

export default JobCreateform;