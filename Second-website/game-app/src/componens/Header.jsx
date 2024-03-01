/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import logoImg from "../assets/imges/logo.png"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from 'react-icons/hi2';
import { HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../context/ThemeContext';
import { CgProfile } from "react-icons/cg";



const Header = () => {
  
  const {theme, setTheme} = useContext(ThemeContext) 
  
  
  return (
    <div className='flex items-center gap-4 p-3'>
        <CgProfile size={45} className="rounded-full dark:text-slate-200 cursor-pointer hover:scale-110 ease-is duration-200"/>
        <div className='flex bg-slate-200 p-2 w-full items-center rounded-full'>
            <HiMiniMagnifyingGlass className='cursor-pointer'/>
            <input className="pl-2 bg-transparent outline-none" type="text" placeholder='Search Games'/>
        </div>
        <div>
          {
            theme ==="light" ?
            
            <HiSun onClick={() =>{
              setTheme("dark");
              localStorage.setItem('theme', 'dark')
            }} className='rounded-full bg-[#121212] text-slate-200 p-2 cursor-pointer hover:scale-110 ease-is duration-200' size={40}/>
            :
            <HiMoon onClick={() =>{
              setTheme("light");
              localStorage.setItem('theme', 'light')
            }} className='rounded-full bg-slate-200 text-[#121212] p-2 cursor-pointer hover:scale-110 ease-is duration-200' size={40}/> 
            
          }
          
          
        </div>
    </div>
  )
}

export default Header