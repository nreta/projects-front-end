/* eslint-disable no-unused-vars */

import Navbar from "./components/Navbar"
import Home from  "./pages/Home"
import Menu from  "./pages/Menu"
import Footerbar from "./components/Footerbar"


const App = () => {
  let Component = Home;
  switch(window.location.pathname){
    case "/":
      Component = Home
      break;
    case "/menu":
      Component = Menu;
      break;
    
  }
  return (
    <div className="app">
      <Navbar/>
      <Component/>
      <Footerbar/>
    </div>
  )
}

export default App