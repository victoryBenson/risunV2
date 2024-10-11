import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import image from '../../../public/assets/yes.png'

const FrameArt = () => {
  return (
    <div className='h-[536px] bg-[#001E2D] flex justify-center items-center text-white'>
        <Wrapper>
            <div className='flex items-center '>
                <div className='space-y-4 w-1/2'>
                    <p className='text-5xl font-bold'>Frame Your Art</p>
                    <p className='font-manrope font-normal text-base py-4'>Frame your art with ease! Click here to visit MyArtStock and transform your creations into beautifully framed masterpieces. Start now!</p>
                    <button className='border border-white p-4 rounded hover:bg-white hover:text-[#001E2D] font-bold'>Go to MyArtstock</button>
                </div>
                <div className='w-3/4 py-4'>
                    <Image src={image} alt='image'/>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default FrameArt;