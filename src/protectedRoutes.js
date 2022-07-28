import React from "react";
import { useCookies } from "react-cookie";
import { Navigate,  Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const [cookies,setCookies] = useCookies("user")
    let isAuthenticated = false;
    if(typeof(cookies.user) !== "undefined"){
        isAuthenticated= true;
    }
    
  
  

  return (
    
        isAuthenticated ? <Component {...restOfProps} /> : <Navigate to="/login" />
      
    
  );
}

export default ProtectedRoute;