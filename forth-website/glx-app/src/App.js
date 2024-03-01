import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routers/Home'
import Pricing from './routers/Pricing'
import Contact from './routers/Contact'
import About from './routers/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App