import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import React, { ReactNode } from 'react'
import avatar from '../../../public/assets/avatar.png'
import { GoHeart } from 'react-icons/go';
import { BiDownload } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import Link from 'next/link';


interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Wrapper>
        <div className='min-h-screen'>
            <div className='py-10 px-5'>
                <div className='flex justify-between'>
                    <ul className='flex items-center justify-between w-1/2 font-bold'>
                        <li className='w-[142px] h-[142px]'><Image src={avatar} alt='icon'/></li>
                        <li className='text-[34px] font-extrabold'>Shine</li>
                        <li className='flex flex-col items-center'>
                            <span>0</span>
                            <span>Saved</span>
                        </li>
                        <li className='h-20 w-[2px] text-blue-400 bg-gray-300'></li>
                        <li className='flex flex-col items-center'>
                            <span>0</span>
                            <span>Favorites</span>
                        </li>
                    </ul>
                    <div className=''>
                        <span className='border p-2 rounded'>Edit Profile</span>
                    </div>
                </div>
                {/*  */}
                <ul className='flex items-center justify-center font-bold gap-8 py-5'>
                    <li >
                        <Link href={`/dashboard`} className='flex items-center'>
                            <GoHeart />Favorites
                        </Link>
                    </li>
                    <li>
                        <Link href={`/dashboard/download`} className='flex items-center'>
                            <BiDownload />Download
                        </Link>
                    </li>
                    <li >
                        <Link href={`/aiGenerator`} className='flex items-center'>
                            <BsStars fontSize={10}/>Generated with Ai
                        </Link>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </div>
    </Wrapper>
  )
}

export default Layout;