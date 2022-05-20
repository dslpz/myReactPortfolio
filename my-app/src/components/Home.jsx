import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import backgroundImage from '../assets/background.jpg'
import Typed from 'react-typed';


const Home = () => {
  return (
  <div name='home' className='w-full h-screen'>
    
    {/* Container */}
    <div style={{backgroundImage: `url(${backgroundImage})`}}
    className='bg-cover flex flex-col justify-center text-left h-full'>
      <br></br>
      <br></br>
      <p className='pl-40 ml-8 max-w-[1000px] px-8 text-black'>Hello, my name is</p>
      <h1 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-pink-600'>Damaris Palacios</h1>
        <h2 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-purple-700'> I'm a Full Stack</h2>
        <Typed
        className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-purple-700'
        strings={['Developer.']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop
        />
      <p className='pl-40 ml-8 px-8 text-black py-4 max-w-[500px]'> I'm a full-stack developer specializing in... Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic at officiis illum atque voluptatum et reiciendis voluptatibus nisi distinctio! Culpa qui debitis ut impedit ea a, minus nam alias.</p>
      <div>
        <button className='pl-50 ml-64 px-8 text-white group border-2 py-3 my-2 flex items-center bg-purple-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:border-pink-600 duration-300 '> 
        View My Work 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home