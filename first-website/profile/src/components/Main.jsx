/* eslint-disable react/no-unescaped-entities */

import {TypeAnimation} from "react-type-animation"
import {FaFacebookF,FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import videwBg from "../assets/HightechBg.mp4"
const Main = () => {
  return (
    <div id="main">
        <video className="w-full h-screen object-cover" src={videwBg} loop autoPlay muted/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/40">      
            <div className="max-w-[700pdx] m-auto h-full w-full flex flex-col justify-center items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-grey-800">I'm Nreta Yawer</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">I'm a
                    <TypeAnimation
                sequence={[
                'Developer',
                2000, // wait 1s 
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            />
                </h2>
                <div className="flex justify-between pt-4 max-w-[200px] w-full ">
                    <FaTwitter className="cursor-pointer hover:scale-110 ease-in duration-200" size={20}/>
                    <FaFacebookF className="cursor-pointer hover:scale-110 ease-in duration-200" size={20}/>
                    <FaInstagram  className="cursor-pointer hover:scale-110 ease-in duration-200" size={20}/>
                    <FaLinkedinIn className="cursor-pointer hover:scale-110 ease-in duration-200" size={20}/> 
                </div>
            </div>
                       
        </div> 
    </div>
  )
}

export default Main