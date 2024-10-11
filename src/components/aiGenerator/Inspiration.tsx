import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../../public/assets/Ai Image1.png'
import image2 from '../../../public/assets/Ai Image2.png'
import image3 from '../../../public/assets/Ai Image3.png'
import image4 from '../../../public/assets/Ai Image4.png'
import image5 from '../../../public/assets/Ai Image5.png'
import image6 from '../../../public/assets/Ai Image6.png'

const Inspiration = () => {
  return (
    <Wrapper>
        <div className='py-10'>
            <div className=' flex flex-col justify-center items-center'>
                <p className='font-bold text-[28px] py-5'>Inspiration</p>
                <p className='font-normal text-center font-manrope text-2xl p-5 text-[#998E8D]'>Get inspired or kick off your project with images created from pre-made prompts and sketches</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                    <Link href={`/`}>
                        <Image src={image1} alt='image'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={image2} alt='image'/>
                    </Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <Link href={`/`}>
                        <Image src={image3} alt='image'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={image4} alt='image'/>
                    </Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <Link href={`/`}>
                        <Image src={image5} alt='image'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={image6} alt='image'/>
                    </Link>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Inspiration;