/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import GenreList from "../componens/GenreList"
import GlobalApi from "../assets/services/GlobalApi"
import { Banner } from "../componens/Banner"
import TrendingGames from "../componens/TrendingGames"
import GamesByGenre from "../componens/GamesByGenre"


const Home = () => {
  const [gameList, setGameList] = useState([]);
  const [gameListByGenres, setGameListByGenr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2)

  useEffect(()=>{
    getGamesList();
    getGameListByGenresId(4);
    setInterval(()=>{
      setCurrentIndex((count)=> {return count ===2?0:(count+1)})
    }, 3000)
  },[])
  const getGamesList = () =>{
    GlobalApi.getGamesList.then((resp)=>{
      setGameList(resp.data.results);
      
    })
  }
  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      setGameListByGenr(resp.data.results);
    })
  }
  return (
    <div className="grid grid-cols-4 ">
      <div className=" h-full hidden md:block px-6">
        <GenreList genreId={(genreId)=> getGameListByGenresId(genreId)}/>
      </div>
      <div className="col-span-4 md:col-span-3 p-4">
        {gameList.length >0 && gameListByGenres.length >0 && 
        <div>
          <Banner currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} gameList= {gameList.slice(0,4)}/>
          <GamesByGenre listGamesByGenre={gameListByGenres}/>
          <TrendingGames gameList={gameList.slice(0,3)}/>
        </div>
        }
      
      </div>
    </div>
    
  )
}

export default Home 