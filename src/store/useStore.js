import { create } from "zustand"
import { useGetAPIuser } from "../utils/jobHook"
import { getUserAPi } from "../utils/jobAPi"
import { use } from "react";



export const useAuthStore = create((set) => ({
    
    user:null,
    loading:true,
    setUser :(user)=> set({user, loading:false}),
    fetchUser:async()=>{
        try{

           
            const data = await getUserAPi();
            console.log(data?.user?.email);
            set({loading:false, user:data?.user?.email})


        }catch(err){
            console.log(err);
            set({loading:false, user:null})
        }
        

    },

    logout:async()=>{
        try{
            const res = await fetch('https://o-stad-backend-code-assignment-08-hmc68trfi.vercel.app/auth/api/logout',{
                method:'POST',
                credentials:'include'
            });
            if(res?.ok){
                set({loading:false, user:null})
            }

        }catch(err){
            console.log(err);
        }
        
    }


    
}))


