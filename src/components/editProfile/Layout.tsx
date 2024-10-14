import Wrapper from '@/shared/Wrapper';
import React, { ReactNode } from 'react'
import Link from 'next/link';


interface LayoutProps {
    children: ReactNode
};

const Layout = ({children}: LayoutProps) => {
  return (
    <Wrapper>
        <div className='min-h-screen'>
            <div className='py-10 px-5'>
                <ul className='flex items-center justify-center font-bold gap-8 py-5'>
                    <li >
                        <Link href={`/edit-profile`} className=''>
                            Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={`/dashboard/download`} className=''>
                            Change Profile
                        </Link>
                    </li>
                    <li >
                        <Link href={`/aiGenerator`} className=''>
                            My Subscription
                        </Link>
                    </li>
                    <li >
                        <Link href={`/aiGenerator`} className=''>
                            Close Account
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