/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */




export const Banner = ({gameList,currentIndex, setCurrentIndex}) => {
    

    

    const handleOnNextClick = ()=>{
        {currentIndex != (gameList.length -1) ? setCurrentIndex(currentIndex+1):setCurrentIndex(0)}
    }
   
    return (
    <div className="flip-card relative"
        onClick={()=>{
            
            handleOnNextClick();
            
        }}
    >
          
    <div className='aspect-w-16 acdspect-h-9'  
    >
        <div className={`absolute  bottom-0 p-5 bg-gradient-to-t from-[#121215] to-transparent rounded-xl w-full`}>
            <h1 className="font-bold lg:text-[25px] md:text-[16px] py-2 text-white">{gameList[currentIndex].name}</h1>
            <button className="bg-blue-600 rounded-lg text-white p-2 px-4 font-semibold hover:scale-105 ease-in duration-200">Get Now</button>
        </div>
        <img src={gameList[currentIndex].background_image} className="md:h-[320px] lg:h-[500px] w-full object-cover rounded-xl shadow-lg bg-gray-500 shadow-gray-400 "/>
    </div>
        
    </div>
  )
}
