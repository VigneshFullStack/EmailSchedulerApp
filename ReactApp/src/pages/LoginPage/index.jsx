import React from 'react'
import Login from '../../components/Login'
import { USER_IS_LOGIN } from '../../utils/constants'
import { Navigate } from 'react-router-dom'

const LoginPage = () => localStorage.getItem(USER_IS_LOGIN) ? <Navigate to="/" /> : <Login/>

export default LoginPage
