import React from 'react'
import Wrapper from '@/shared/Wrapper';
import image1 from '../../../public/assets/Painting..png'
import image2 from '../../../public/assets/Painting 2.png'
import image3 from '../../../public/assets/Painting...png'
import Image from 'next/image';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';

const RecentSearch = () => {
  return (
    <Wrapper>
        <div>
            <p className='font-bold text-[28px] py-10'>Recent Search</p>
            <div>
                <div className='h-[310px] flex items-center justify-center gap-4'>
                    <span className='h-full w-[403px]'>
                        <Image src={image1} alt='image1' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
                    <span className='h-full w-[403px]'>
                        <Image src={image2} alt='image2' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
                    <span className='h-full w-[403px]'>
                        <Image src={image3} alt='image3' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
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

export default RecentSearch;