import React from 'react'
import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import { Footer } from '../components/Footer'
import TraningCom from '../components/Traning'
const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImages heading="About Our Program" text="Learn more about us"/>
        <TraningCom/>
        <Footer/>
    </div>
  )
}

export default About