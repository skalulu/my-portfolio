import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-screen h-screen'>
            <div className='py-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About me</p>               
            </div>
            <p className='text-xl mb-10'>
            “If you can’t fly, then run. If you can’t run, then walk. If you can’t walk, then crawl. But whatever you do, you have to keep moving forward” -Martin Luther King Jr.
            </p>
            <br />
            <p className='text-xl'>
            I become a web developer and it was not an easy journey for me.  I started to learn coding 5 years ago, for 6 months I have tried to grasp everything at once and I got exhausted and quitted. I thought I can never be able to do this. I thought I did not have the faculties to become a developer.   
            </p>
            <br />
            <p className='text-xl'>
            But what was missing is the mentality. The mentality that Mamba had, Martin Luther King Jr. had, every successful people had. The feeling of self-trust, knowing that the way you have taken is leading you to what you have always dreamed of...
            </p>
            <br />

            <p className='text-xl mb-11'>
            Here I am, developing.. My self and my coding.

            </p>
        </div>
    </div>
  )
}

export default About