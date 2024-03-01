import React from 'react'
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[400px] relative shadow-lg shadow-gray-800 rounded-lg'>
            <div className='absolute w-full h-full rounded-lg text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span  className='text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-600'>Devliverd</span></h1>
            </div>
            <img className='w-full max-h-[400px] object-cover rounded-lg' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' alt="/" />
        </div>
    </div>
  )
}

export default Hero