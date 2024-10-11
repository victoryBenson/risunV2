import Image from 'next/image';
import React from 'react'
import image from '../../public/assets/image...png'


const NewsLetter = () => {
  return (
    <div className='h-[469px] flex flex-col relative justify-center items-center '>
            <Image src={image} alt='image' className='h-full w-full object-cover object-fit absolute inset-0 -z-10'/>
            <div className='flex flex-col items-center justify-center '>
                <p className='font-bold text-3xl text-white pb-10'>Get Instant Alert on our newest Collection</p>
                <div className='flex items-center justify-center rounded-r-lg w-[40vw]'>
                    <input type="text" placeholder='Enter Email Address ' className='p-3 w-full outline-none rounded-l-lg' />
                    <button type="button" className='flex justify-center items-center bg-[#2F4858] p-3 text-white rounded-r-lg' >Subscribe</button>
                </div>
            </div>
        </div>
  )
}

export default NewsLetter;