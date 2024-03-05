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
import ReportForm from './Pages/ReportForm'
import Documents from './Pages/Documents'
import DocumentForm from './Pages/DocumentForm'
import Birthdays from './Pages/Birthdays'

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
                element: 
                    <Navigate 
                        to="/users"
                    />
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
            },
            {
                path: '/newspaper/new',
                element: 
                <ReportForm
                    key="reportCreate"
                />
            },
            {
                path: '/newspaper/:id',
                element: 
                <ReportForm
                    key="reportUpdate"
                />
            },
            {
                path: '/documents',
                element: <Documents/>
            },
            {
                path: '/documents/new',
                element: 
                <DocumentForm
                    key="documentCreate"
                />
            },
            {
                path: '/documents/:id',
                element: 
                <DocumentForm
                    key="documentUpdate"
                />
            },
            {
                path: '/birthdays',
                element: <Birthdays/>
            },
            

        ]
    }
])

export default router
