import React from 'react'
import { USER_IS_LOGIN } from './constants'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'


const PrivateRoute = () => {
    return window.localStorage.getItem(USER_IS_LOGIN) ? <Outlet/> : <Navigate to={'/login'} />;
}

export default PrivateRoute
