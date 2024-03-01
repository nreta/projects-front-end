import React from 'react'
import Navbar  from '../components/Navbar'
import { Footer } from '../components/Footer'
import HeroImages from '../components/HeroImages'
import PricingCard from '../components/PricingCard'
const Pricing = () => {
  return (
    <div>
        <Navbar/> 
        <HeroImages heading='PRICING' text='Choose your trip.'/>
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Pricing