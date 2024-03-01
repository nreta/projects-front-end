/* eslint-disable no-unused-vars */
import './Menu.css'


import MenuBg  from '../components/MenuBg'
import { useState , useEffect} from 'react'
import MenuItems from '../components/MenuItems';
import Footerbar from '../components/Footerbar';
const Menu = () => {
    const [CurrentCount, setCurrentCount] = useState(2);
    useEffect(()=>{
        setInterval(()=>{
          setCurrentCount((count)=> {return count ===2?0:(count+1)})
        }, 5000)
      },[])
  return (
    <div className='menu-main'>
        <MenuBg CurrentCount={CurrentCount}/>
        <MenuItems/>
         
    </div>
  )
}

export default Menu