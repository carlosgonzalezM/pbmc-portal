import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className='min-h-screen'>
        <Outlet/>
    </div>
  )
}