

import React from 'react'
import {useNavigate } from 'react-router-dom';
 
const RedirectedForm = () => {
    const navigate= useNavigate()
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
     const storedData = JSON.parse(sessionStorage.getItem('user') || '{}')
 const password = storedData.password;
        const expiresAt = storedData.expiresAt;
   
    const checkAuth = () => {
      if (password && expiresAt) {
        const currentTime = new Date().getTime();
        const expiryTime = parseInt(expiresAt, 10);
        if (currentTime <= expiryTime) {
          return setIsAuthenticated(true);
        } 
       
      }
      setIsAuthenticated(false);
      
      navigate(-1)
  sessionStorage.removeItem('password');
  sessionStorage.removeItem('passwordExpiry');
     
       
    };
  
    React.useEffect(() => {
      checkAuth();
    }, []);
  return (
    <div>
         {isAuthenticated ? (<div>Redirect</div>):(<div> Try to login</div>)}
        
        
        </div>
  )
}

export default RedirectedForm
