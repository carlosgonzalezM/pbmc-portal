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
import BirthdayForm from './Pages/BirthdayForm'
import News from './Pages/News'

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
            },
            {
                path: '/news/:id',
                element: <News
                    key="showNews"
                />
            }
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: 
                    <Newspaper/>
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
            {
                path: '/birthdays/new',
                element: 
                <BirthdayForm
                    key="birthdayCreate"
                />
            },
            {
                path: '/birthdays/:id',
                element: 
                <BirthdayForm
                    key="birthdayUpdate"
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
            

        ]
    }
])

export default router
