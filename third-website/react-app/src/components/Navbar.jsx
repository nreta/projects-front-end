
import './Navbar.css'




const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">@Line_Pizza</div>
      <ul className="nav-menu">
        <a href="/home"><li>Home</li></a>
        <a href="/menu"><li>Menu</li></a>
        <a ><li className='nav-ordor'>Ordor Now</li></a>
      </ul>
    </div>
  )
}

export default Navbar