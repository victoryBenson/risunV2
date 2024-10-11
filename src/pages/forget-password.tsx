import Image from 'next/image';
import React from 'react'
import image from '../../public/assets/authImage.png'
import image2 from '../../public/assets/Frame 4.png'
import image3 from '../../public/assets/Group 89452.png'


const ForgetPassword = () => {
        

  return (
    <div className='flex min-h-screen'>
        <div className='w-1/2'>
            <p className='text-3xl font-bold md:mx-20 p-4'>Risun</p>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-center text-3xl py-14'>Reset Password</p>
                <p className='font-manrope md:mx-20 text-center text-base font-normal'>Enter the email that you used when you signed up to recover your password. You will receive a password reset link.</p>
                <form className='w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center'>
                    <div className='flex flex-col p-3'>
                        <label htmlFor="username" className='font-bold py-2'>Enter Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder='Enter Email Address'
                            className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                            required
                        />
                    </div>
                    <div className='bg-[#B00712] m-3 text-white rounded'>
                        <button type="button" className='w-full p-3 font-bold'>LOGIN</button>
                    </div>
                   
                </form>
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

export default ForgetPassword;
