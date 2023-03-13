

import React from 'react'
import { Navigate } from 'react-router-dom';
import Forms from './Forms';
 
const RedirectedForm = () => {
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
         <Navigate replace to={'/LazyComponent'}/>
      
  sessionStorage.removeItem('password');
  sessionStorage.removeItem('passwordExpiry');
     
       
    };
  
    React.useEffect(() => {
      checkAuth();
    }, []);
  return (
    <div>
         {isAuthenticated ? (<div>Redirect</div>):(<div>Try TO Login Again</div>)}
        
        
        </div>
  )
}

export default RedirectedForm
