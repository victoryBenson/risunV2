import React from 'react'
import image from '../../../public/assets/heroImage.png';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';


const Hero = () => {
    
  return (
    <div>
        <div className='h-[576px] flex flex-col relative justify-center items-center '>
            <Image src={image} alt='image' className='h-full w-full object-cover object-fit absolute inset-0 -z-10'/>
            <div className='flex flex-col items-center justify-center '>
                <p className='font-bold text-4xl text-white pb-10'>Explore a world of Amazing Photos</p>
                <p className='py-4 text-base text-white font-semibold'>Find and Download High-Quality Photos for Any Project</p>
                <div className='flex items-center justify-center bg-white rounded-lg w-[40vw]'>
                    <p>
                        <select name="" id="" className='px-3 outline-none text-base font-semibold'>
                            <option value="filter">Filter By </option>
                            <option value="2">option two</option>
                        </select>
                    </p>
                    <input type="text" placeholder='search for photos and illustration' className='p-3 w-full outline-none' />
                    <button type="button" className='flex justify-center items-center bg-[#2F4858] p-3 text-white rounded-r-lg' ><CiSearch />Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

