import React from 'react'
import scholarshipapp from '../assets/scholarshipapp.jpg'


const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-black  bg-[#fbe1f0]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>Portfolio</p>
                <p className='py-6 text-pink-600'>Check out some of my recent work!</p>
            </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

{/* Grid Item */}
            <div 
            style={{backgroundImage: `url(${scholarshipapp})`}}
            className='shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div'
                
            >

            {/* Hover Effect */}
            <div className='opacity-0 hover:bg-pink-600 hover:opacity-80 hover:container'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Scholarship Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
           
            </div>
        </div>
    </div>   
    </div>
  )
}

export default Portfolio