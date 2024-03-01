import React from 'react'
import './PricingCard.css'
import {Link} from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-contaner'>
          <div className='card'>
            <h3>-- Lorem </h3>
            <span className='bar'></span>
            <p className='btc'>Lorem ipsum</p>
            <p >Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <Link to="/contact" className='btn'>Book</Link>
          </div>
          <div className='card'>
            <h3>-- Lorem </h3>
            <span className='bar'></span>
            <p className='btc'>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <Link to="/contact" className='btn'>Book</Link>
          </div>
          <div className='card'>
            <h3>-- Lorem </h3>
            <span className='bar'></span>
            <p className='btc'>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <Link to="/contact" className='btn'>Book</Link>
          </div>
        </div>
    </div>
  )
}

export default PricingCard