/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './Background.css'
import video1 from "../assets/video1.mp4"
import image1 from "../assets/image-1.jpg"
import image2 from "../assets/image-5.jpg"
import image3 from "../assets/image-3.jpg"
import image4 from "../assets/image-6.jpg"
import image5 from "../assets/image-7.jpg"



const Background = ({playStatus, heroCount}) => {
  
  
    if(playStatus) {
      
      return <video src={video1} className="background" autoPlay loop muted/>
    
    }
    else if (heroCount === 0) return <img className="background" src={image1}/>
    else if (heroCount === 1) return <img className="background" src={image2}/>
    else if (heroCount === 2) return <img className="background" src={image3}/>
    else if (heroCount === 3) return <img className="background" src={image4}/>
    else if (heroCount === 4) return <img className="background" src={image5}/>

}


export default Background