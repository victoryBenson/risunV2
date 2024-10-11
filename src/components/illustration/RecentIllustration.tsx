import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/assets/Ai Image wit propmt1.png'
import image2 from '../../../public/assets/Ai Image wit propmt 2.png'
import image3 from '../../../public/assets/Ai Image wit propmt 3.png'
import image4 from '../../../public/assets/Ai Image wit propmt 4.png'
import image5 from '../../../public/assets/Ai Image wit propmt 5.png'
import image6 from '../../../public/assets/Ai Image wit propmt 6.png'
import image7 from '../../../public/assets/Ai Image wit propmt 7.png'
import image8 from '../../../public/assets/Ai Image wit propmt 8.png'
import image9 from '../../../public/assets/Ai Image wit propmt 7.png'

const RecentIllustration = () => {
  return (
    <Wrapper>
        <div>
            <p className='font-bold text-[28px] py-8'>Most Recent Illustration</p>
            <div className='grid grid-cols-3 gap-4 py-10'>
                <Image src={image1} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image2} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image3} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image4} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image5} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image6} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image7} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image8} alt="image2" className='w-[400px] h-[409px]'/>
                <Image src={image9} alt="image2" className='w-[400px] h-[409px]'/>
            </div>
            <div className='space-y-4 py-10 flex justify-center'>
                <button className='bg-[#2F4858] text-white rounded-2xl p-3 px-5'>See more</button>
            </div>
        </div>
    </Wrapper>
  )
}

export default RecentIllustration