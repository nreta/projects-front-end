/* eslint-disable no-unused-vars */

import { TypeAnimation } from 'react-type-animation'
const Context = () => {
  return (
    <div id="contect" className='m-auto md:pl-20 p-4 py-16 bg-stone-500'>

        <h1 className='py-4 text-4xl font-bold text-center text-stone-800'>Contact</h1>
        <h2 className='py-2 text-xl font-bold text-center text-stone-700'>

        <TypeAnimation
                sequence={[
                'To contact me please fill in the following: ', 1000,' ']}
                wrapper="div"
                speed={50}
                cursor={true}
                style={{ fontSize: '1em', paddingLeft: "6px" }}
                repeat={Infinity}
          />
        </h2>
        <form action="https://getform.io/f/Rb4lp0bB" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-semibold text-stone-800'>Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-200" type="text" name="name"/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-semibold text-stone-800'>Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-200" type="text" name="phone"/>
                </div>
                
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 font-semibold text-stone-800'>Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-200" type="email" name="email"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 font-semibold text-stone-800'>Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-200" type="text" name="subject"/>
                </div>
            </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 font-semibold text-stone-800'>Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300 bg-gray-200" name="message" rows="10"></textarea>
                    
                
            </div>
            
            <button className='bg-stone-800 text-gray-100  font-semibold mt-4 p-4 w-full rounded-lg hover:scale-105 ease-in duration-300'>Send Message</button>
            
        </form>
    </div>
  )
}

export default Context