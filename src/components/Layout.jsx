import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-gray-400 to-white w-screen min-h-screen overflow-hidden'>
        <div className='w-72 h-full'>
            <Sidebar/> 
        </div>
        <div className="flex flex-1 flex-col p-4 overflow-y-auto">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
