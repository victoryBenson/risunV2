import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import { PiMagicWandDuotone } from 'react-icons/pi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbRefresh } from 'react-icons/tb'
import image from '../../../public/assets/Ai Image1.png'

const Layout = () => {
  return (
    <Wrapper>
        <div className='flex gap-8'>
            <aside className='sticky top-0 w-1/2 p-2 h-[100vh] bg-[#E3EFF8] rounded-2xl'>
                <div className=' w-full p-2'>
                    <p className='font-semibold text-base'>Prompt</p>
                    <form className='space-y-4'>
                        <textarea name="" id="" className='border w-full h-[185px] p-2 rounded' placeholder='write a prompt on what u want to see'></textarea>
                        <p className='font-manrope py-3'>Need inspiration? Try this prompt:  Group of men in a garden</p>
                        <select name="" id="" className='w-full text-black p-4'>
                            <option value="" className='text-[#998E8D]'>Select Style (Optional)</option>
                        </select>
                        <p className='flex items-center justify-center py-4 bg-[#2F4858] rounded text-white'>
                            <button type="button" className='flex items-center gap-2'><PiMagicWandDuotone />Generate</button>
                        </p>
                    </form>
                </div>
            </aside>
            <main className='overflow-y-auto flex-grow w-full'>
                <div className=''>
                    <div className='border border-[#A09E9E] rounded-2xl h-[447px] p-4 flex justify-between flex-col items-center'>
                        <div className='text-center'>
                            <p className='font-manrope text-2xl p-3'>How Risun Ai image generator read your prompt</p>
                            <p className='text-[#998E8D] text-2xl p-4'>A (((whimsical gnome))) dressed as a (((wizard))), with a full white bread and a purple robe, casting a small, (fire spell) from his palm, ((( gray background)))</p>
                        </div>
                        <div className='gap-2 flex flex-col'>
                            <button className='flex items-center gap-1'><TbRefresh />Regenerate Prompt</button>
                            <button className='flex items-center gap-1 text-[#998E8D]'><RiDeleteBinLine />Delete Prompt</button>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p className='font-bold text-[24px]'>Inspiration</p>
                        <div className='grid grid-cols-3 gap-4 '>
                            <Image src={image} alt='image'/>
                            <Image src={image} alt='image'/>
                            <Image src={image} alt='image'/>
                            <Image src={image} alt='image'/>
                            <Image src={image} alt='image'/>
                            <Image src={image} alt='image'/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </Wrapper>
  )
}

export default Layout