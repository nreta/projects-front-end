/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './MenuBg.css'
import image1 from "../assets/image-1.jpg"
import image2 from "../assets/image-7.jpg"
import image3 from "../assets/image-3.jpg"



const MenuBg = ({CurrentCount}) => {
    
    if (CurrentCount === 0) return <div className='menu-bg-ly'><img className="menu-bg" src={image1}/></div> 
    else if (CurrentCount === 1) return <div className='menu-bg-ly'><img className="menu-bg" src={image2}/></div> 
    else if (CurrentCount === 2) return <div className='menu-bg-ly'><img className="menu-bg" src={image3}/></div> 
}


export default MenuBg