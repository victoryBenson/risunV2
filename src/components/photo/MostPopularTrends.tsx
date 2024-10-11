import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import image2 from '../../../public/assets/Photo interacrtions..png'
import image3 from '../../../public/assets/photo.png'
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';

const MostPopularTrends = () => {
  return (
    <Wrapper>
        <div>
            <p className='font-bold text-[28px] py-10'>Explore the most popular and trending photos</p>
            <div className='flex justify-center w-full gap-4'>
                <div className='w-[400px] space-y-4'>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                </div>
                <div className='w-[400px] space-y-4'>
                    <Image src={image3} alt='image' className='h-[510px] w-full'/>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                    <Image src={image3} alt='image' className='h-[510px] w-full'/>
                </div>
                <div className='w-[400px] space-y-4'>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                    <Image src={image2} alt='image' className='h-[409px] w-full'/>
                </div>
            </div>
            <div className='flex justify-center items-center py-10 gap-4'>
                <button type='button' className='flex items-center border border-[#2F4858] p-2 px-4 rounded-2xl'><TiArrowLeft size={30}/></button>
                <button type='button' className='flex items-center bg-[#2F4858] text-white p-2 rounded-2xl text-base'>Next <TiArrowRight size={30}/></button>
            </div>
        </div>
    </Wrapper>
  )
}

export default MostPopularTrends;