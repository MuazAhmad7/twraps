import React, {useState} from 'react'
import { FaCarSide} from "react-icons/fa";  //this is an icon just import it 
import { FaCarTunnel } from "react-icons/fa6";

const Navbar = () => {

    const  [nav, setNav] = useState(false)

    const handleNav = () => 
    {
        setNav(!nav) // sets nav to the opposite of its current value
    }

  return (
    <div className='flex justify-between items-center h24 max-w-[1300px] mx-auto px-4 text-white'>  {/* this is tailwind*/}
      <h1 className = 'width-full text-3xl font-bold '>Tazz Wraps.</h1>

        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li> {/* p is for padding you can also do p-(t,l,r) for direction of padding */}
            <li className='p-4'>Services</li>
            <li className='p-4'>About Us</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block: md:hidden'>
            {nav ? < FaCarTunnel size={25} /> : <FaCarSide size = {25} /> }
            
        </div>

        <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-700'  : 'fixed left-[-100%] '} > {/* this is for mobile*/}
        <h1 className = 'width-full text-3xl font-bold m-4'>Tazz Wraps.</h1>

            <ul className=' p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li> 
            <li className='p-4 border-b border-gray-600'>Services</li>
            <li className='p-4 border-b border-gray-600'>About Us</li>
            <li className='p-4'>Contact</li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
