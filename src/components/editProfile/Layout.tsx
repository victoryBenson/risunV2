import Wrapper from '@/shared/Wrapper';
import React, { ReactNode } from 'react'
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
                <ul className='flex items-center justify-center font-bold gap-8 py-5'>
                    <li >
                        <Link href={`/edit-profile`} className='flex items-center'>
                            <GoHeart />Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={`/dashboard/download`} className='flex items-center'>
                            <BiDownload />Change Profile
                        </Link>
                    </li>
                    <li >
                        <Link href={`/aiGenerator`} className='flex items-center'>
                            <BsStars fontSize={10}/>My Subscription
                        </Link>
                    </li>
                    <li >
                        <Link href={`/aiGenerator`} className='flex items-center'>
                            <BsStars fontSize={10}/>Close Account
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