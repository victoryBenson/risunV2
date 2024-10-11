import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import image1 from '../../../public/assets/nature foto.png'
import image2 from '../../../public/assets/tech.png'
import image3 from '../../../public/assets/people.png'
import image4 from '../../../public/assets/emotions.png'
import image5 from '../../../public/assets/entertainment.png'
import image6 from '../../../public/assets/sports.png'
import image7 from '../../../public/assets/action.png'
import image8 from '../../../public/assets/anime.png'
import image9 from '../../../public/assets/food and drinks.png'
import Link from 'next/link';


const PopularCategory = () => {
  return (
    <Wrapper>
        <div className='my-12'>
            <div className='gap-2 py-5'>
                <p className='text-[28px] font-bold'>Popular Categories</p>
                <p className='text-[24px] text-[#998E8D] py-3'>Browse popular categories for GIFs that fit any mood or occasion, from reactions to celebrations</p>
            </div>
            <div className='my-5'>
                <div className='h-[310px] flex items-center justify-center gap-4'>
                    <Link href={`/photo-category`} className='h-full w-[298px]'>
                        <Image src={image1} alt='image1'/>
                    </Link>
                    <Link href={`/photo-category`} className='h-full w-[298px]'>
                        <Image src={image2} alt='image2'/>
                    </Link>
                    <Link href={`/photo-category`} className='h-full'>
                        <Image src={image3} alt='image3'/>
                    </Link>
                </div>
                <div className='h-[310px] flex items-center justify-center gap-4'>
                    <span className='h-full'>
                        <Image src={image4} alt='image3'/>
                    </span>
                    <span className='h-full w-[298px]'>
                        <Image src={image5} alt='image1'/>
                    </span>
                    <span className='h-full w-[298px]'>
                        <Image src={image6} alt='image2'/>
                    </span>
                </div>
                <div className='h-[310px] flex items-center justify-center gap-4'>
                    <span className='h-full w-[403px]'>
                        <Image src={image7} alt='image3' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
                    <span className='h-full w-[403px]'>
                        <Image src={image8} alt='image1' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
                    <span className='h-full w-[403px]'>
                        <Image src={image9} alt='image2' className='h-full w-full object-cover rounded-2xl'/>
                    </span>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default PopularCategory;