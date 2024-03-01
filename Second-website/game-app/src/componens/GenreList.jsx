/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import GlobalApi from "../assets/services/GlobalApi"


const GenreList = ({genreId}) => {
    const [genereList,SetGenerList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    useEffect(()=>{
        getGenreList();
        
    },[])
    const getGenreList = ()=>{
        GlobalApi.getGenereList.then((resp)=>{
            SetGenerList(resp.data.results);
            
        })
    }
  return (
    <div className="dark:text-white shadow-lg bg-[#12121] shadow-[#445c4422] p-2 mt-4 mb-4 rounded-xl">
        <h1 className="text-[35px] font-bold dark:text-white">Genere</h1>
        
        {genereList.map( (item, index)=>(
            <div onClick={()=>{
                setActiveIndex(index);
                genreId(item.id);
                
            }} className={`dark:text-white flex gap-2 items-center mb-2 cursor-pointer 
            hover:bg-gray-400 p-2 group rounded-lg
            hover:dark:bg-gray-600
            
            ${ activeIndex ===index && "bg-gray-400 dark:bg-gray-600"}
            `} key={index}>
                <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${(localStorage.getItem("active Index")== index ||activeIndex ==index )&& "scale-105"}`}/>
                <h3 className={`text-[20px] group-hover:font-bold scale-105 transition-all ease-out duration-300 ${activeIndex == index  && "font-bold"}`}>{item.name}</h3>
            </div>
        ))}
       
    </div>
  )
}

export default GenreList