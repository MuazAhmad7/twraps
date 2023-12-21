import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-6'>
        <div className='max-width-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 px-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Recieve A Quote kjnknknknksc dwjnc jw cjwkcn</h1>
            <p>Wchupapi munyenoncdwjknckjwnckjwncjknwkcnw</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full px-6'> 
                  <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email" />
                  <button className='bg-white text-black w-[200px] rounded-md font-medium mx-auto ml-4 my-6 py-2 '>Notify Me</button>
                </div>
                <p className=' px-6'>We care very deeply about your <span className='underline'>Privacy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
