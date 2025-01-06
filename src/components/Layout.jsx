import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import background from '../assets/background.jpg'
import mountainBackground from '../assets/mountains.jpg'

const Layout = () => {
  return (
    <div 
      className="w-screen h-screen overflow-hidden p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${mountainBackground})` }}
    >
      <div className="w-full h-full flex rounded-[28px] bg-white/30 backdrop-blur-md border border-white/20 shadow-md drop-shadow-md px-6">
        <div className='relative'>
            <Sidebar styling={'fixed z-50'}/> 
        </div>
        <div className="flex flex-1 flex-col my-7 z-0 p-4 rounded-[28px] bg-white/50 backdrop-blur-md border border-white/40 shadow-md drop-shadow-md px-6 overflow-y-auto">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout