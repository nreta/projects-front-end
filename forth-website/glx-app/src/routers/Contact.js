import React from 'react'
import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import { Footer } from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImages heading='CONTACT' text='To contact us'/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact