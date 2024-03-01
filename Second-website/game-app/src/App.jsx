/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Header from './componens/Header'
import {ThemeContext} from "./context/ThemeContext"
import Home from './pages/Home'
function App() {
  const [theme, setTheme] = useState("light")
  useEffect(()=>{
    if(localStorage.getItem("theme") != null){
      setTheme(localStorage.getItem("theme"))
      
    }
    
  }, [])
  
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`${theme} ${theme ==="dark" ? "bg-[#121212]" : "bg-slate-100"} min-h-[100vh]`}>
        <Header/>
        <Home/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
