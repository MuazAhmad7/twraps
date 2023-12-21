import React from 'react'
import { TiSocialInstagram, TiSocialTwitter, TiSocialLinkedinCircular } from "react-icons/ti";


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto pxy-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className = 'w-full text-3xl font-bold '>Tazz Wraps.</h1>
        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit assumenda animi quod, nam error alias in consequatur quos ad debitis cupiditate ipsum impedit nobis! Saepe perferendis totam nostrum eligendi veritatis.</p>
        <div className='flex justify-between md:w-[75%] my-6 '>
            <TiSocialInstagram size={30} />
            <TiSocialTwitter size={30} />
            <TiSocialLinkedinCircular size={30} />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-8'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>chupapi</li>
                    <li className='py-2 text-sm'>food</li>
                    <li className='py-2 text-sm'>paratha</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Contacts</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>chupapi</li>
                    <li className='py-2 text-sm'>food</li>
                    <li className='py-2 text-sm'>paratha</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 '>Services</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>chupapi</li>
                    <li className='py-2 text-sm'>food</li>
                    <li className='py-2 text-sm'>paratha</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer
