import React from 'react'
import Author from '../assets/colorful.png'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f4c9e3] text-pink-600'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full '>
              <div className='photo-wrap mb-5 object-scale-down h-81 w-72'>
                <img className="portfolio-img" src={Author} alt="Author..." >
                </img>
              </div>
             <div></div>
              </div>
              <div className='max-w-[1000px]  grid grid-cols-2 gap-2 w-full  px-4'>
                
                <div></div>
                <div>
                  <p className='sm:text-right text-4xl font-bold object-position-right'>Hi there and welcome to my online space! Please take a look around.</p>
                
                  <p className='sm:text-right text-2xl font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic at officiis illum atque voluptatum et reiciendis voluptatibus nisi distinctio! Culpa qui debitis ut impedit ea a, minus nam alias.</p>
                </div>
            </div>   
        </div>
    </div>

  )
}

export default About
