

import "./Footerbar.css"
import {FaFacebookF,FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"

const Footerbar = () => {
  return (
    <div className='footer'>
      <div className="footer-header">@Line_Pizza</div>
      <ul className="footer-logos">
        <FaTwitter className="footer-logo" size={15}/>
        <FaFacebookF className="footer-logo"  size={15}/>
        <FaInstagram className="footer-logo" size={15}/>
        <FaLinkedinIn className="footer-logo" size={15}/> 
      </ul>
      <ul className="footer-menu">
        <a href="/home"><li>Home</li></a>
        <a href="/menu"><li>Menu</li></a>
        <a href="/menu"><li>Contact Us</li></a>
        <a ><li>Our Team</li></a>
      </ul>
      <div className="footor-copyright"><p>Copyright @2024 Designed by NYCM</p></div>
    </div>
  )
}

export default Footerbar