import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color:'#fff',marginRight: '2rem'}}/>
            <div>
              <p>
                moskovskaya Acme St.
              </p>
              <h4>Orel Russia</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#fff',marginRight: '2rem'}}/> +7(920)8783087</h4>
          </div>
          <div className='email'>
          <h4><FaMailBulk size={20} style={{color:'#fff',marginRight: '2rem'}}/> travelGalaxy@gmail.com</h4>
          </div>
        </div>

        <div className='footer-right'>
          <h4>About the company</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div>
            <FaFacebook size={20} style={{color:'#fff',marginRight: '1rem'}}/>
            <FaTwitter size={20} style={{color:'#fff',marginRight: '1rem'}}/>
            <FaLinkedin size={20} style={{color:'#fff',marginRight: '1rem'}}/>
          </div>
        </div>
          


        </div>
    </div>
  )
}
