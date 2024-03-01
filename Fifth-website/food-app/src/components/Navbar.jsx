import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdHelp, MdFavorite} from 'react-icons/md'
const Navbar = () => {
    const [sideNav, setSideNav] = useState(true);
    const handleSideNav = () =>{setSideNav(!sideNav)}

    const [delivery, setDelivery] = useState(1);
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>        
            <div className='cursor-pointer' onClick={handleSideNav}>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Yummy <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden cursor-pointer lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p onClick={()=>setDelivery(1)} className={`${delivery ===1 ?'bg-black  text-white rounded-full p-2 duration-300 ease-in shadow-lg shadow-gray-800': "p-1"}`}>Delivery</p>
                <p onClick={()=>setDelivery(2)} className={`${delivery ===2?'bg-black  text-white rounded-full p-2 duration-300 ease-in shadow-lg shadow-gray-800' :'p-2'}`}>Pickup </p>
            </div>
        </div>
        <div className='bg-gray-200 flex items-center px-2 w-[200px] rounded-full
        sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch className='cursor-pointer' size={25}/>
            <input className='bg-transparent p-2 focus:outline-none 'type="text"  placeholder='Search food'/>
        </div>
        
        <button className='bg-black rounded-full text-white hidden md:flex items-center py-2'>
            <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>
        
        <div className={`${sideNav&&"hidden"} bg-black/80 fixed w-full h-screen z-10 top-0 left-0`}>
            <div className='fixed top-0 left-0 w-[300px] h-screen bg-white duration-300'>
                <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'>Yummy <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800 it'>
                        <li  className='text-xl py-4 flex items-center'><TbTruckDelivery className='px-2' size={40}/> Ordors</li >
                        <li  className='text-xl py-4 flex items-center'><MdFavorite className='px-2' size={40}/> Favorites</li >
                        <li  className='text-xl py-4 flex items-center'><FaWallet className='px-2' size={40}/> Wallet</li >
                        <li  className='text-xl py-4 flex items-center'><MdHelp className='px-2' size={40}/> Help</li >
                        <li  className='text-xl py-4 flex items-center'><AiFillTag className='px-2' size={40}/> Promotions</li >
                        <li  className='text-xl py-4 flex items-center'><BsFillSaveFill className='px-2' size={40}/> Best Ones</li >
                        <li  className='text-xl py-4 flex items-center'><FaUserFriends className='px-2' size={40}/> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar