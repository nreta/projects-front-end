/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import Background from "../components/Background";
import Hero from "../components/Hero"
import Footerbar from "../components/Footerbar";
const Home = () => {
  
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=> {return count ===4?0:(count+1)})
    }, 3000)
  },[])

  const [heroCount, setHeroCount] = useState(4);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero heroCount={heroCount}  setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </div>
  )
}

export default Home