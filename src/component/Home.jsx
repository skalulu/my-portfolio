import React from 'react'
import img from '../assets/port1.jpeg'
import {RiArrowRightSLine} from 'react-icons/ri';
import { Link } from 'react-scroll'
 

const Home = () => {
    
    return (
    <>
  <div class="relative w-full max-w-lg">
    <div class="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob"></div>
    <div class="absolute top-25 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute top-34 left-5 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob animation-delay-4000"></div>
    
  </div>

    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col ml-3 justify-center h-full md:ml-0'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Frontend Developer</h2>
                <p className='py-4 text-gray-500 max-w-md'>I have 2 years experience in developing websites. I'm self taught and fast-learner. Currently
                   I love to work on web application using HTML, CSS, JS and React. 
                </p>
                <div className='flex justify-center md:block'>
                    <Link to='portfolio' smooth duration={500}>
                    
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:translate-y-1 hover:scale-95 duration-200 z-10 '>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 z-10'>
                            <RiArrowRightSLine size={25} className='ml-1'/>                   
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className='mb-20'>
                <img className='rounded-2xl mx-auto w-1/2 md:w-1/2' src={img} alt="myphoto" />            
            </div>
        </div>
    </div>
    </>
  )
}

export default Home