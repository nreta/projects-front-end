import React from 'react'
import './BgVideo.css'
import videobg from '../assets/bgVideo.mp4'
import {Link} from 'react-router-dom'
import {TypeAnimation} from 'react-type-animation'
const BackgroundVideo = () => {
  return (
    <div className='hero'>
        <video src={videobg} autoPlay loop muted id='video'/>    
        <div className='content'>
            <h1>Travel The Universe</h1>
            <p>You Can See The hole 
            <TypeAnimation
                sequence={[
                'Univers',
                2000, // wait 1s 
                ' ',1000]} wrapper="div" speed={50} cursor={true} repeat={Infinity}/>

            </p>
            <div>
                <Link to='/about' className='btn'>Learn more</Link>
                <Link to='/contack' className='btn btn-light'>Contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default BackgroundVideo