import React, { useState } from 'react';
import default_profile from '../assets/default_profile_cat.png';
import { RxDashboard } from 'react-icons/rx';
import { LuBookPlus } from 'react-icons/lu';
import { PiBooks } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const Sidebar = () => {
    const [ open, setOpen ] = useState(true);
    const [ selectedMenu, setSelectedMenu ] = useState(null);

    const menus = [
        {
            label: 'Home',
            path: '/',
            icon: <RxDashboard />,
            subItems: []
        },
        {
            label: 'Books',
            path: '/books',
            icon: <PiBooks />,
            subItems: [
                {
                    label: 'Create Book',
                    path: '/books/create_book',
                    icon: <LuBookPlus />
                },
                {
                    label: 'Create Book',
                    path: '/books/create_book',
                    icon: <LuBookPlus />
                },
                {
                    label: 'Create Book',
                    path: '/books/create_book',
                    icon: <LuBookPlus />
                },
            ]
        }
    ]

    const handleMenuClick = (menu) => {
        setSelectedMenu(selectedMenu === menu ? null : menu);
    }

  return (
    <main className={`w-full h-full bg-transparent flex items-center p-2 justify-start `}>
        {/* sidebar */}
        <div className={`${open? 'w-64 ' : 'w-28'} h-[95%] rounded-[28px] bg-white/30 backdrop-blur-md border border-white/20 shadow-md drop-shadow-md px-6 py-5 flex flex-col gap-2 duration-300 transition-all ease-in-out `}>
            {/* sidebar toggle button */}
            <div 
                className={`w-6 h-6 bg-white/60 backdrop-blur-md border border-white/40 shadow-md drop-shadow-sm rounded-full cursor-pointer flex justify-center items-center p-1 z-10 duration-300 transition-all ease-in-out fixed top-[60px] ${open ? 'left-[242px]' : 'left-[98px]'}`}
                onClick={() => setOpen(!open)}
            >
                <IoIosArrowBack className={`w-full h-full duration-500 transition-all ease-in-out text-[#242220] opacity-60 ${open ? 'rotate-0' : '-rotate-90'} `} />
            </div>

            {/* streetlights */}
            <div className={`w-14 h-3 flex items-center ${open ? 'justify-start' : 'justify-center'} gap-[6px]`}>
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5A52] "></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#E0B509] "></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#53C22B] "></div>
            </div>

            {/* user profile || header */}
            <div className="w-full h-12 mt-2 flex justify-start items-center gap-1 ">
                <div className="w-full h-full flex items-center duration-500 transition-all ease-in-out">
                    {open ? (
                        <div className="flex items-center  ">
                            <img src={default_profile} alt="default profile" className={`w-12 h-12 aspect-square rounded-full opacity-80`} />

                            <div className={`flex flex-1 flex-col opacity-100`}>
                                <h1 className='uppercase text-xs font-medium text-[#242220] opacity-40 '>kepala perpustakaan</h1>
                                <h1 className='capitalize text-sm font-medium text-[#242220] opacity-90 '>Godithiya</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center ">
                            <img src={default_profile} alt="default profile" className={`w-14 h-14 aspect-square rounded-full opacity-80`} />

                            <div className={`flex flex-1 flex-col opacity-0`}>
                                <h1 className='uppercase text-xs font-medium text-[#242220] opacity-40 '>kepala perpustakaan</h1>
                                <h1 className='capitalize text-sm font-medium text-[#242220] opacity-90 '>Godithiya</h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* line */}
            <div className="w-full h-[1px] mt-2 bg-[#242220] opacity-10"></div>

            {/* menu items */}
            <ul className='w-full flex flex-col gap-2 select-none mt-4 duration-500 transition-all ease-in-out '>
                <h1 className='text-xs text-[#242220] opacity-40 uppercase ml-3'>main</h1>
                {menus.map((menu, index) => (
                    <div key={index} className='relative w-full'>
                        <NavLink
                            to={menu.path}
                            onClick={() => handleMenuClick(menu.label)}
                            className={`w-full h-14 flex items-center capitalize gap-3 rounded-xl px-5 py-4 bg-white/10 backdrop-blur-md border border-white/10 drop-shadow-md duration-500 transition-all ease-in-out ${open ? 'justify-start' : 'justify-center'}`}
                        >
                            <span className='text-xl text-[#242220] opacity-80'>{menu.icon}</span>
                            {open && <h1 className={`text-base text-[#242220] ${open ? 'opacity-80' : 'opacity-0 text-sm'} `}>{menu.label}</h1>}
                            {open && menu.subItems.length > 0 && (
                                selectedMenu === menu.label ? <FaChevronDown className="ml-auto mr-1 text-[#242220] opacity-60" /> : <FaChevronRight className="ml-auto mr-1 text-[#242220] opacity-60" />
                            )}
                        </NavLink>

                        {selectedMenu === menu.label && menu.subItems.length > 0 && (
                            <ul className={`w-full mt-4 flex flex-col items-center justify-center `}>
                                <div className='w-1 h-full bg-[#242220] opacity-20 mt-auto' />
                                {menu.subItems.map((subItem, idx) => (
                                    <NavLink
                                    key={idx}
                                    to={subItem.path}   
                                    className={({isActive}) => `w-40 text-nowrap flex items-center justify-center bg-transparent cursor-pointer text-[#242220] opacity-50 font-medium hover:text-[#1d1b1a] rounded-xl px-4 py-2 hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:drop-shadow-md duration-300 transition-all ease-in-out mb-3 gap-2  ${isActive? 'text-[#242220] opacity-80 bg-white/10 backdrop-blur-md border border-white/10 drop-shadow-md' : null} `}
                                    >
                                        {open ? (<span className='text-lg'>{subItem.icon}</span>) : (<span className='text-lg'>{subItem.icon}</span>)}

                                        {open && <span>{subItem.label}</span>}
                                    </NavLink>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default Sidebar
