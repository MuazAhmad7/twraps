import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white' >
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold p-2'>TAZZ WRAPS</p>
            <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>Affordable Wraps and Tints</h1>

            <div className='flex justify-center items-center'>
                <p className='md:text-2xl sm:text-1xl text-xl font-semibold pr-2 py-2'>Quality Assured, Wraps and Tint for </p>
                <Typed className='md:text-2xl sm:text-1xl text-xl font-semibold text-gray-400' strings={['YOU', 'CHEAP']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-xl text-lg font-bold text-gray-400 '>Yerrr</p>
            <button className='bg-white text-black w-[250px] rounded-md font-medium mx-auto my-6 py-2'>Schedule An Appointment!</button>
        </div>
    </div>
  )
}

export default Hero
