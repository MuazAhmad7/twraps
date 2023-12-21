import React from 'react'
import car from './car.jpg'

const Introduction = () => {
  return (
    <div className='w-full bg-white py-16 px-4'> 
        <div className='max-width-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src = {car} alt="car1" />
            <div className='flex flex-col justify-center'>
                <p className='font-bold'>Who Are We?</p>
                <h1 className='md:text-3xl sm:text-xl text-xl font-bold py-2'>Yerr</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ratione quis impedit molestias nemo ullam alias repudiandae exercitationem, voluptate tempore magni debitis dolores. Voluptas modi tenetur ea natus at!</p>
                <button className='bg-black text-white w-[250px] rounded-md font-medium mx-auto md:mx-0 my-6 py-2'>Get A Quote</button>
            </div>
        </div>
    
     </div>
  )
}

export default Introduction
