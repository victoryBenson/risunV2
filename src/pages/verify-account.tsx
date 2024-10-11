import Image from 'next/image';
import React from 'react'
import image from '../../public/assets/authImage.png'
import image2 from '../../public/assets/Frame 4.png'
import image3 from '../../public/assets/Group 89452.png'
import icon from '../../public/assets/Vector.png'


const AccountVerification = () => {
        

  return (
    <div className='flex min-h-screen'>
        <div className='w-1/2'>
            <p className='text-3xl font-bold md:mx-20 p-4'>Risun</p>
            <div className='flex flex-col items-center pt-10'>
                <span className='w-[120px] h-[120px]'>
                    <Image src={icon} alt='icon' className='h-full w-full '/>
                </span>
                <p className='font-bold text-center text-3xl py-5'>Account Verification</p>
                <p className='font-manrope md:mx-20 text-center text-base font-normal'>Please check your email inbox for a verification message from us. Click the link provided in the email to verify your account and complete the sign-up process</p>
                <div className='bg-[#B00712] m-3 text-white rounded flex w-full md:w-2/3 lg:w-3/4 my-10'>
                    <button type="button" className='w-full p-3 font-bold'>Go to Email</button>
                </div>
            </div>
        </div>
        <div className='border w-1/2 relative'>
            <Image src={image} alt='image' className='h-full w-full object-cover '/>
            <span className='absolute w-[246px] h-[60px] z-10 top-1/4 right-6'>
                 <Image src={image2} alt='image' className='h-full w-full object-cover rounded-full'/>
            </span>
            <span className='absolute w-[300px] h-[60px] z-10 top-[50%] left-6'>
                <Image src={image3} alt='image' className='h-full w-full object-contain'/>
            </span>
        </div>
    </div>
  )
}

export default AccountVerification;
