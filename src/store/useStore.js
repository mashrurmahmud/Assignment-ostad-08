import { create } from "zustand"
import { useGetAPIuser } from "../utils/jobHook"
import { getUserAPi } from "../utils/jobAPi"



export const useAuthStore = create((set) => ({
    
    
    loading:true,
    setUser :()=> set((state) => ({ users: state.users, loading: false })),
    fetchUser:async()=>{
       return getUserAPi()

    }


    
}))