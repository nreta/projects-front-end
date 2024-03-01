/* eslint-disable no-unused-vars */
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {GrProjects} from "react-icons/gr"
import { useState } from "react"



const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handle = () => {
        setNav(!nav);    
    };
    
  return (
    <>
        <AiOutlineMenu onClick={handle} className='fixed top-4 right-4 z-10 md:hidden cursor-pointer'/>
        { nav && (
            <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
                <a href="#main"
                   className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                   onClick={handle}
                   >

                    <AiOutlineHome size={20}/>
                    <span className="pl-4">Home</span>
                </a>
                <a href="#work"
                   className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                   onClick={handle}
                   >

                    <GrProjects size={20}/>
                    <span className="pl-4">Work</span>
                </a>
                <a href="#projects"
                    onClick={handle}
                   className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">

                    <AiOutlineProject size={20}/>
                    <span className="pl-4">Projects</span>
                </a>
                <a href="#main"
                    onClick={handle}
                   className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">

                    <BsPerson size={20}/>
                    <span className="pl-4">Resume</span>
                </a>
                <a href="#Contact"
                    onClick={handle}
                   className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">

                    <AiOutlineMail size={20}/>
                    <span className="pl-4">Contact</span>
                </a>

            </div>
        ) 
        
        }

        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#main">
                    <AiOutlineHome size={20}></AiOutlineHome>
                </a>
            
                <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#work">
                    <GrProjects size={20}></GrProjects>
                </a>
            
                <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#projects">
                    <AiOutlineProject size={20}></AiOutlineProject>
                </a>
            
                <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#main">
                    <BsPerson size={20}></BsPerson>
                </a>
           
                <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#contect">
                    <AiOutlineMail size={20}></AiOutlineMail>
                </a>
            </div>
            
        </div>
    </>
  )
}

export default Sidenav