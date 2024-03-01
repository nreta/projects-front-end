/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {TypeAnimation} from "react-type-animation"


const TrendingGames = ({gameList}) => {
  return (
    <div className="hidden md:block p-4">
        <div className="dark:text-white">
        <h2 className="font-bold text-[25px] py-4">
          
        <TypeAnimation
                sequence={[
                'Trending Games',
                2000, ' ',]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            /></h2>
        </div>
        <div className="lg: grid-cols-4 gap-5 md:grid md:grid-cols-3">
            {gameList.map((item, index) => (
                <div className="dark:bg-gray-600 bg-gray-400 rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out" key={index}>
                    <img src={item.background_image} className="h-[270px] rounded-t-lg object-cover shadow-lg shadow-gray-800"/>
                    <h3 className="dark:text-white text-[20px] p-2 font-bold">{item.name}</h3>

                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingGames