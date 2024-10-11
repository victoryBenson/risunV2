import Link from 'next/link';
import React from 'react'
import { BsStars } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='flex justify-between lg:mx-20 items-center h-[86.41px] p-2'>
        <ul className='flex items-center gap-8 font-semibold text-base'>
            <li className='font-helvetica font-bold leading-8 text-[1.7rem] pl-3'>
              <Link href={`/`}>
                Risun
              </Link>
            </li>
            <li>
              <Link href={`/photo`}>
                Photo
              </Link>
            </li>
            <li>
              <Link href={`/illustration`}>
                Illustration
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href={`/ai-generator`} className='flex items-center'>
                <BsStars fontSize={10} className=''/>
                Ai Generator
              </Link>
            </li>
            <li>Become a Contributor</li>
        </ul>
        <ul className='flex items-center gap-4 text-base font-semibold'>
            <li className='text-[#ffa748]'>Pricing</li>
            <li>
              <Link href={`login`}>
                Login
              </Link>
            </li>
            <li className='bg-black text-white p-3 rounded-2xl'>
              <Link href={'register'}>Create Account</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;

