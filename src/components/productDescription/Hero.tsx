import React, { ChangeEvent, useState } from 'react'
import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../../public/assets/Photo interacrtions..png'
import icon1 from '../../../public/assets/try.png'
import icon2 from '../../../public/assets/Frame 48095583.png'
import nairaIcon from '../../../public/assets/Naira.png'


const Hero = () => {
    const [selectedItem, setSelectedItem] = useState<string>(''); 

  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedItem(e.target.value);
    };

    const handleSubmit = () => {}

  return (
    <Wrapper>
        <div className=''>
            <div className='flex justify-between w-full h-[776.93px] gap-8 my-10'>
                <div className='relative h-[649px] w-[700px]'>
                    <Image src={image} alt='image' className='w-full h-full object-contai overflow-hidden'/>
                    <div className='flex flex-col gap-2 absolute top-4 right-4'>
                        <Link href='/'>
                            <Image src={icon1} alt='icon' className='w-[84px] h-[60px]'/>
                        </Link>
                        <Link href='/'>
                            <Image src={icon2} alt='icon' className='w-[84px] h-[60px]'/>
                        </Link>
                    </div>
                </div>
                <div className='w-[508px] h-[686.93px] space-y-2'>
                    <form onSubmit={handleSubmit}>
                        <p className='font-bold text-[24px]'>Laughing African American woman</p>
                        <p className='text-base font-normal border-b py-4 text-black border-black'>By Joe Krovits</p>
                        <p className='text-[#776D6D] font-normal text-base py-4 font-manrope'>Lorem ipsum dolor sit amet consectetur. Feugiat nulla justo tincidunt suscipit eget velit purus. Faucibus amet neque faucibus.</p>
                        <div>
                            <div className={`${selectedItem === 'Item 1' ? 'bg-[#C6E7FF]' : ""} flex items-start p-10 gap-4 w-full relative justify-between transition-all rounded`}>
                                <div className='flex gap-4 items-center '>
                                    <input
                                    type="radio"
                                    id="item1"
                                    name="item"
                                    value="Item 1"
                                    checked={selectedItem === 'Item 1'}
                                    onChange={handleChange}
                                    className={`w-[30px] h-[30px]`}
                                    />
                                    <div className=''>
                                        <span className='text-[16px] font-semibold'>Only this image</span>
                                        <p className='text-[#656565]'>Pay one-time for this particular picture</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='flex items-center font-bold gap-2'>
                                        <span>
                                            <Image src={nairaIcon} alt='icon' quality={100}/>
                                        </span>
                                        4,500
                                    </p> 
                                </div>
                            </div>
                            <div className={`${selectedItem === 'Item 2' ? 'bg-[#C6E7FF]' : ""} flex items-start p-10 gap-4 w-full relative justify-between transition-all rounded`}>
                                <div className='flex gap-4 items-center '>
                                    <input
                                    type="radio"
                                    id="item2"
                                    name="item"
                                    value="Item 2"
                                    checked={selectedItem === 'Item 2'}
                                    onChange={handleChange}
                                    className='w-[30px] h-[30px]'
                                    />
                                    <div className=''>
                                        <span className='text-[16px] font-semibold'>10-image plan subscription</span>
                                        <p className='text-[#656565]'>Use Our Basic plan to save up to 10% for 10 image.</p>
                                        <Link href={`/`} className='text-base text-[#5F8ADA]'>“click here to see all plan”</Link>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p className='flex items-center font-bold gap-2'>
                                        <span>
                                            <Image src={nairaIcon} alt='icon' quality={100}/>
                                        </span>
                                        4,500
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <p className='font-bold text-[24px] '>Choose Image size</p>
                            <span className='flex gap-4'>
                                <button type="button" className="border border-[#2F4858] p-3 px-6 rounded-full bg-[#2F4858] text-white">12 X 12</button>
                                <button type="button" className="border border-[#2F4858] p-3 px-6 rounded-full">24 X 24</button>
                                <button type="button" className="border border-[#2F4858] p-3 px-6 rounded-full">30 X 30</button>
                                <button type="button" className="border border-[#2F4858] p-3 px-6 rounded-full">40 X 40</button>
                            </span>
                            <div className='pt-2'>
                                <button className='w-full bg-[#B20021] text-white rounded-2xl p-4 font-semibold text-[24px]'>Download</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Hero;