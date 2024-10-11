import React from 'react'
import Image from 'next/image';
import image2 from '../../../public/assets/Photo..png';
import Wrapper from '@/shared/Wrapper';

const PopularTrends = () => {
  return (
    <Wrapper>
        <div>
            <p className='font-bold text-[28px]'>Explore the most popular and trending photos</p>
            <div className='grid grid-cols-3 gap-4 py-10'>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
            </div>
            <div className='space-y-4 py-10'>
                <p className='text-[18px] font-medium'>Keyword</p>
                <span className='flex gap-4 '>
                    <button type="button" className='border border-[#2F4858] rounded-xl p-3'>Trees</button>
                    <button type="button" className='border border-[#2F4858] rounded-xl p-3'>Forest</button>
                    <button type="button" className='border border-[#2F4858] rounded-xl p-3'>Vegetation</button>
                    <button type="button" className='border border-[#2F4858] rounded-xl p-3'>Model</button>
                </span>
            </div>
        </div>
    </Wrapper>
  )
}

export default PopularTrends;