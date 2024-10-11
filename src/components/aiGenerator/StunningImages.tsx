import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import image from '../../../public/assets/image-1.png'
import image2 from '../../../public/assets/genratit image.png'
import image3 from '../../../public/assets/genratit image 2.png'
import { GoArrowDownRight } from 'react-icons/go';

const StunningImages = () => {
  return (
    <Wrapper>
        <div className='py-10'>
            <div className=' flex flex-col justify-center items-center'>
                <p className='font-bold text-[28px] py-5'>Effortlessly Create Stunning Images</p>
                <p className='font-normal text-center font-manrope text-base p-5'>Explore how our AI-powered tool transforms your text prompts into beautiful, high-quality images in seconds, making it easier than ever to find the perfect visuals for your projects.</p>
            </div>
            <div className='flex gap-4 py-4'>
                <div className='h-[563px] w-1/2 rounded relative flex justify-center items-center'>
                    <Image src={image} alt='image' className='h-full w-full rounded-3xl object-cover absolute inset-0'/>
                    <div className='absolute flex flex-col gap-4'>
                        <p className='text-[28px] font-bold text-white'>Test to image generator</p>
                        <p className='flex w-full'>
                            <input 
                                type="search" 
                                name="" 
                                id="" 
                                className='text-[#736A69] font-semibold p-3 rounded-2xl w-full outline-none'
                                placeholder='Describe the image you envision. Click the button bellow'
                            />
                        </p>
                        <div className='flex items-center justify-center'>
                            <button type="button" className='flex justify-center items-center border-white border p-3 text-white rounded-lg hover:bg-white hover:text-black transition-all font-bold' >Try It Now <GoArrowDownRight size={20} /></button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 gap-4 flex flex-col'>
                    <Image src={image2} alt="image" className='h-[281.5px]'/>
                    <Image src={image3} alt="image" className='h-[281.5px]'/>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default StunningImages;