import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [food, setFood] = useState(data);
    const [activeIndex, setActiveIndex] = useState(-1);


    const filterType = (category)=>{
        setFood(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    } 

    const filterPrice = (price)=>{
        
        setFood(
            data.filter((item)=>{
                return item.price_cheak === price;
            })
        )
    } 

   
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div >
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> {setFood(data); setActiveIndex("data");}} className= {`${activeIndex === "data" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>All</button>
                    <button onClick={()=> {filterType("burger");  setActiveIndex("burger");}} className={`${activeIndex ==="burger" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>Burgers</button>
                    <button onClick={()=> {filterType("pizza"); setActiveIndex("pizza");}} className={`${activeIndex==="pizza" &&"bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>Pizza</button>
                    <button onClick={()=> {filterType("salad"); setActiveIndex("salad");}} className={`${activeIndex ==="salad" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>Salads</button>
                    <button onClick={()=> {filterType("chicken"); setActiveIndex("chicken");}} className={`${activeIndex==="chicken"&& "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>Chicken</button>
                </div>
            </div>

            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div >
                    <button onClick={()=> {filterPrice("$"); setActiveIndex("$");}} className={`${activeIndex ==="$" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>💸</button>
                    <button onClick={()=> {filterPrice("$$"); setActiveIndex("$$");}} className={`${activeIndex ==="$$" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>💸💸</button>
                    <button onClick={()=> {filterPrice("$$$"); setActiveIndex("$$$");}} className={`${activeIndex ==="$$$" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>💸💸💸</button>
                    <button onClick={()=> {filterPrice("$$$$"); setActiveIndex("$$$$");}} className={`${activeIndex ==="$$$$" && "bg-orange-600 text-white"} border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}>💸💸💸💸</button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((item, index)=>(
                <div className='rounded-lg border shadow-lg hover:scale-110 ease-in duration-300' key={index}>
                    <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name}/>
                    <dir className="flex justify-between px-2 py-4">
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-2 rounded-full'>{item.price} ру</span>
                        </p>
                    </dir>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food