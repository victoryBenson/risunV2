import React from 'react'
import image2 from '../../../public/assets/Ai image.png'
import image1 from '../../../public/assets/Component 1.png'
import image3 from '../../../public/assets/Gifs.png'
import vectorIcon from '../../../public/assets/Vector 1.png'
import Image from 'next/image'
import Wrapper from '@/shared/Wrapper'
import Link from 'next/link'



const FindContent = () => {
  return (
    <Wrapper>
        <p className='relative max-w-fit py-10'>
            <span className='py-10 font-bold text-[28px]'>Find the perfect content for your project </span>
            <Image src={vectorIcon} alt='icon' className='w-[214px] absolute -right-28'/>
        </p>
        <div className='flex gap-4 items-center justify-center my-7'>
            <Link href={`/photo`} className='h-[449px] rounded-2xl'>
                <Image src={image1}  alt="image" />
            </Link>
            <Link href={`/photo`} className='h-[449px] rounded-2xl'>
                <Image src={image2}  alt="image" />
            </Link>
            <Link href={`/photo`} className='h-[449px] rounded-2xl'>
                <Image src={image3}  alt="image" />
            </Link>
        </div>
    </Wrapper >
  )
}

export default FindContent;