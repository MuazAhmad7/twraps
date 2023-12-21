import React from 'react'
import { GiRolledCloth } from "react-icons/gi";
import tint from './tint.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px bg-white text-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={tint} alt="tint" />
                <h2 className='text-2xl font-bold text-center py-8 '>Window Tint</h2>
                <p className='text-center text-4xl font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8  mt-8'>0-30%</p>
                    <p className='py-2 border-b mx-8'>blablabla</p>
                    <p className='py-2 border-b mx-8'>idk</p>
                </div>
                <button className='bg-black text-white w-[250px] text-center rounded-md font-medium mx-auto my-6 py-2'>Schedule</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  '>
                <GiRolledCloth className='w-20 h-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8 '>Car Wrap</h2>
                <p className='text-center text-4xl font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8  mt-8'>0-30%</p>
                    <p className='py-2 border-b mx-8'>blablabla</p>
                    <p className='py-2 border-b mx-8'>idk</p>
                </div>
                <button className='bg-black text-white w-[250px] text-center rounded-md font-medium mx-auto my-6 py-2'>Schedule</button>
            </div>
        </div>
    
    </div>
  )
}

export default Cards
