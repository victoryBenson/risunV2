import Wrapper from '@/shared/Wrapper';
import React from 'react'
import { PiMagicWandDuotone } from 'react-icons/pi';

const AiMage = () => {
  return (
    <Wrapper>
        <div className='flex items-center justify-center h-[671px] gap-4'>
            <div className=' w-full p-2'>
                <p className='font-bold text-[45px]'>AI image generator</p>
                <p className='font-manrope py-5 text-base'>Experience our AI text-to-image tool that delivers limitless results instantly. Give it a try now!</p>
                <form className='space-y-4'>
                    <textarea name="" id="" className='border w-full h-[185px] p-2' placeholder='write a prompt on what u want to see'></textarea>
                    <p className='font-manrope py-3'>Need inspiration? Try this prompt:  Group of men in a garden</p>
                    <select name="" id="" className='w-full text-black p-4'>
                        <option value="" className='text-[#998E8D]'>Select Style (Optional)</option>
                    </select>
                    <p className='flex items-center justify-center py-4 bg-[#2F4858] rounded text-white'>
                        <button type="button" className='flex items-center gap-2'><PiMagicWandDuotone />Generate</button>
                    </p>
                </form>
            </div>
            <div className=' w-full border'>
                <p className='p-5 text-2xl text-[#998E8D] flex h-inherit'>Click on suggested options from your prompt</p>
                {/* <textarea className='p-5 text-black w-full min-h-fit' placeholder='Click on suggested options from your prompt'></textarea> */}
            </div>
        </div>
    </Wrapper>
  )
}

export default AiMage;