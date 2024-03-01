/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Hero.css'

import PlayIcon from  "../assets/play_icon.png"
import PauseIcon from  "../assets/pause_icon.png"
import {TypeAnimation} from "react-type-animation"
import { GoArrowRight } from "react-icons/go";

const Hero = ({setPlayStatus, playStatus, setHeroCount, heroCount}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
      <TypeAnimation
                sequence={[
                `Fresh from the oven`,
                2000, `Made With Love`,
                2000, `Made With Passion`,
                2000, `Made Just For You`,
                2000, ]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            />
      </div>
      <div className="hero-explore">
        <a href='/menu'> <span><GoArrowRight size={30}/></span></a>
        <p>See menu</p>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount ===0 ? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount ===2 ? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=>setHeroCount(4)} className={heroCount ===4 ? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount ===1 ? "hero-dot orange": "hero-dot"}></li>
          <li onClick={()=>setHeroCount(3)} className={heroCount ===3 ? "hero-dot orange": "hero-dot"}></li>

        </ul>
        <div className="hero-play">
        <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?PauseIcon: PlayIcon }/>
        <p>
        <TypeAnimation
                sequence={[
                `See The Video`,
                2000, ` `,
                2000, ]} wrapper="div" speed={50} cursor={true} style={{ fontSize: '1em', paddingLeft: "6px" }} repeat={Infinity}
            />
          </p>
      </div>
      
      </div>
      
      
    </div>
  )
}

export default Hero