import Link from 'next/link'
import React from 'react'
import youtube from '../../public/assets/Youtube.png';
import twitter from '../../public/assets/Twitter.png';
import dribble from '../../public/assets/Dribbble.png';
import instagram from '../../public/assets/Instagram.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex items-center w-full justify-center bg-[#001E2D] text-white h-[378px]'>
        <div className='flex items-top justify-between w-full p-2 mx-4 md:mx-8 lg:mx-20 transition-all'>
            <div className=''>
                <p className='font-bold text-[28px] py-2'>Risun</p> 
                <div className='flex items-center py-2 gap-4'>
                    <Link href={`/`}>
                        <Image src={instagram} alt='icon'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={dribble} alt='icon'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={twitter} alt='icon'/>
                    </Link>
                    <Link href={`/`}>
                        <Image src={youtube} alt='icon'/>
                    </Link>
                </div>
                <span className='text-lg'>Copyright All rights reserved</span>
            </div>
            <div className='flex flex-col text-lg  gap-4'>
                <p className='font-bold text-[28px]'>Company</p>
                <Link href={`/`}>
                    Content
                </Link>
                <Link href={`/`}>
                    Git
                </Link>
                <Link href={`/`}>
                    Ai Generator
                </Link>
                <Link href={`/`}>
                    My ArtStock
                </Link>
            </div>
            <div className='flex flex-col text-lg gap-4'>
                <p className='font-bold text-[28px]'>Support</p>
                <Link href={`/`}>
                    Help Center
                </Link>
                <Link href={`/`}>
                    Term of Service
                </Link>
                <Link href={`/`}>
                    Legal
                </Link>
                <Link href={`/`}>
                    Privacy Policy
                </Link>
                <Link href={`/`}>
                    Status
                </Link>
            </div>
            <div className='flex flex-col text-lg gap-4 '>
                <p className='font-bold text-[28px]'>Stay up to date</p>
                <div className='flex items-center justify-center rounded-lg'>
                    <input type="text" placeholder='Enter email Address' className='p-3 w-full outline-none rounded-l-lg text-black' />
                    <button type="button" className='flex justify-center items-center bg-[#B20021] p-3 text-white rounded-r-lg' >Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;