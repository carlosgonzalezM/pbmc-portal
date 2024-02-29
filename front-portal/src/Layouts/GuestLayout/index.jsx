import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Contexts/ContextProvider'

export default function GuestLayout() {

  const {token} = useStateContext()

  if(token){
    return <Navigate to="/users"/>
  }

  return (
    <div className='min-h-screen'>
        <Outlet/>
    </div>
  )
}
