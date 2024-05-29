import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { UserAuth } from '../contexts/UserAuth';
function PrivateRoute({children}) {
   const {token}=useContext(UserAuth)
  const location=useLocation()
  if(!token){
    return <Navigate to='/login' state={{path:location.pathname}}/>
  }
  return children
}
export default  PrivateRoute
