import React from 'react'
import Layout from '@/components/UserDashboard/Layout'
import Image from 'next/image'
import image from '../../../public/assets/Photo interacrtions..png'

const Download = () => {
  return (
    <Layout>
        <div className='grid grid-cols-3 gap-4 py-4 mb-24'>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
            <Image src={image} alt='image' className='w-[400px] h-[409px]'/>
        </div>
    </Layout>
  )
}

export default Download;