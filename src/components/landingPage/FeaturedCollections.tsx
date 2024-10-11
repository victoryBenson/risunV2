import React from 'react'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import image1 from '../../../public/assets/nature.png'
import image2 from '../../../public/assets/fire.png'
import image3 from '../../../public/assets/jublation.png'
import image4 from '../../../public/assets/canva.png'
import image5 from '../../../public/assets/BEach.png'
import image6 from '../../../public/assets/Component 2.png'
import image7 from '../../../public/assets/Painting.png'
import image8 from '../../../public/assets/Painting 2.png'
import image9 from '../../../public/assets/Painting 3.png'


const FeaturedCollections = () => {
  return (
    <Wrapper>
        <div className='my-12'>
            <div className='gap-2 py-5'>
                <p className='text-[28px] font-bold'>Featured Collections</p>
                <p className='text-[24px] text-[#998E8D] py-3'>See what`s trending and most viewed right now</p>
            </div>
            <div className='my-5'>
                <div className='h-[310px] flex items-center justify-center gap-4'>
                    <span className='h-full w-[298px]'>
                        <Image src={image1} alt='image1'/>
                    </span>
                    <span className='h-full w-[298px]'>
                        <Image src={image2} alt='image2'/>
                    </span>
                    <span className='h-full'>
                        <Image src={image3} alt='image3'/>
                    </span>
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

export default FeaturedCollections;