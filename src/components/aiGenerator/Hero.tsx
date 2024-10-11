import React from 'react'
import image from '../../../public/assets/aiGenerator.png';
import Image from 'next/image';
import { GoArrowDownRight } from 'react-icons/go';
import Link from 'next/link';


const Hero = () => {
    
  return (
    <div>
        <div className='h-[576px] flex flex-col relative justify-center items-center '>
            <Image src={image} alt='image' className='h-full w-full object-cover object-fit absolute inset-0 -z-10'/>
            <div className='flex flex-col items-center justify-center '>
                <p className='font-bold text-4xl text-white pb-10'>Turn Your Words into Stunning Images With AI Tool</p>
                <p className='py-4 text-base text-white font-semibold'>Experience the power of AI to transform your text prompts into captivating visuals</p>
                <div className='flex items-center justify-center'>
                    <Link href='ai-prompt' className='flex justify-center items-center border-white border p-3 text-white rounded-lg' >Try It Now <GoArrowDownRight size={20} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;