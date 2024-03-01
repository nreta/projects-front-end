import React from 'react'
import './Traning.css'
import video1 from '../assets/spaceV.mp4'
import img2 from "../assets/space2.jpg"
import img3 from "../assets/space3.jpg"
import img4 from "../assets/space4.jpg"
import { Link } from 'react-router-dom'

const Traning = () => {
  return (
    <div className='traning'>
        <div className='left'>
            <h1>
                What to expect
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className='right'>
            
                
                <div className='video-contaner'>
                    <video src={video1} loop autoPlay muted/>
                </div>
            

            <div className='img-contaner'>

                <div className='img-stack top'>
                    <img src={img3} alt=''/>
                </div>
                <div className='img-stack bottom'>
                    <img src={img4} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traning