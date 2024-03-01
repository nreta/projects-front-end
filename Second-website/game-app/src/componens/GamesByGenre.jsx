/* eslint-disable react/prop-types */
import { TypeAnimation } from "react-type-animation";

const GamesByGenre = ({listGamesByGenre}) => {
  return (
    <div>
      <h1 className="text-[25px] mt-5 font-bold dark:text-slate-200">
      <TypeAnimation
                sequence={[
                'Popular Games',
                2000, ' ',]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            />
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-6 m-4 md:grid-cols-2 lg:grid-cols-3 ">
          {listGamesByGenre.map((item, index)=>(
              
            <div className="p-4 dark:bg-gray-600 bg-gray-400 rounded-lg pb-10 h-full cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out" key={index}>
                  <img className="w-full h-[80%] rounded-lg object-cover" src={item.background_image}/>
                  <h2 className="pt-1 text-[16px] font-bold dark:text-slate-200">{item.name} <span className="text-[10px] bg-blue-600 rounded-md p-1">{item.metacritic}</span></h2>
                  <h2>⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
            </div> 
          ))}
      </div>
    </div>
  )
}

export default GamesByGenre