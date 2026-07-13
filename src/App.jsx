import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayOut from './HomeLayout/HomeLayOut'
import Home from './Components/Home'
import Jobinfo from './Components/Recent_jobs/Jobinfo'
import AuthLayOut from './AuthLayOut/AuthLayOut'
import Login from './Components/Login/Login'
import Register from './Register/Register'
import DashboardLayout from './Dashboard/DashboardLayout'
import Profile from './Dashboard/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
       <Route path='/' element={<HomeLayOut/>}>

        <Route path='/' element={<Home/>}/>
        <Route path='/jobinfo/:id' element={<Jobinfo/>}/>

        
         
          
       </Route>
       <Route path='/auth' element={<AuthLayOut/>}>
         <Route path='/auth/login' element={<Login/>}/>
         <Route path='/auth/register' element={<Register/>}/>
         


       </Route> 
        <Route path='/dashboard' element={<DashboardLayout/>}>
         <Route path='/dashboard/profile' element={<Profile/>}/>
       
         


       </Route> 


       </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
