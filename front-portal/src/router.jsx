import React from 'react'
import GuestLayout from './Layouts/GuestLayout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaultLayout'
import Users from './Pages/Users'
import Dashboard from './Pages/Dashboard'
import Newspaper from './Pages/Newspaper'

const  router = createBrowserRouter([
    {
        path:'/',
        element: <GuestLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>

            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to="/users"/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/newspaper',
                element: <Newspaper/>
            }
        ]
    }
])

export default router
