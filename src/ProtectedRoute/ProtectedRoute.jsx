import React from 'react';
import { useAuthStore } from '../store/useStore';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useAuthStore();
    if(user){return children}
    
    


    return <Navigate to="/auth/login" />
};

export default ProtectedRoute;