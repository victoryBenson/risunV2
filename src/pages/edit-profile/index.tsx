import Layout from "@/components/editProfile/Layout";
import Image from "next/image";
import icon from '../../../public/assets/avatar2.png'
import { GoArrowUpRight } from "react-icons/go";
import icon2 from "../../../public/assets/premiumIcon.png"
import icon3 from '../../../public/assets/plan icon.png'

const EditProfile = () => {
    return (
        <Layout>
            {/* edit profile */}
            <div className="className='justify-center items-center h-fit'">
                    <form >
                        <div className="grid grid-cols-7 gap-4 justify-between mx-32">
                            <div className="flex flex-col justify-cente items-center col-span-2">
                                <p className="font-extrabold font-manrope text-[26px] py-10">Edit Profile</p>
                                <Image src={icon} alt="icon"/>
                            </div>
                            <div className="col-span-5">
                                <div className="flex w-full">
                                    <div className='flex flex-col p-3 w-1/2'>
                                        <label htmlFor="username" className='font-bold py-2'>First name</label>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            id="username" 
                                            placeholder='Enter your first name'
                                            className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col p-3 w-1/2'>
                                        <label htmlFor="username" className='font-bold py-2'>Last name</label>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            id="username" 
                                            placeholder='Enter your Last name'
                                            className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                            required
                                        />
                                    </div>  
                                </div>
                                <div className='flex flex-col p-3'>
                                    <label htmlFor="username" className='font-bold py-2'>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder='Enter your email address'
                                        className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col p-3'>
                                    <label htmlFor="username" className='font-bold py-2'>Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        placeholder='Enter your username'
                                        className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                        required
                                    />
                                </div>
                                <div className='bg-[#998E8D] m-3 text-white rounded'>
                                    <button type="button" className='w-full p-4'>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>

            {/* change password */}
            <div className="className='justify-center items-center my-20">
                <form >
                    <div className="grid grid-cols-7 gap-4 justify-between mx-32">
                        <div className="flex flex-col justify-cente items-center col-span-2">
                            <p className="font-extrabold font-manrope text-[26px]">Change Password</p>
                        </div>
                        <div className="col-span-5">
                            <div className='flex flex-col p-3'>
                                <label htmlFor="username" className='font-bold py-2'>Old Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder='Enter your Old Password'
                                    className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                    required
                                />
                            </div>
                            <div className='flex flex-col p-3'>
                                <label htmlFor="username" className='font-bold py-2'>New Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder='Enter your new password'
                                    className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                    required
                                />
                            </div>
                            <div className='flex flex-col p-3'>
                                <label htmlFor="username" className='font-bold py-2'>Confirm Password</label>
                                <input 
                                    type="password" 
                                    name="Confirm_password" 
                                    id="Confirm_password" 
                                    placeholder='Enter your Confirm Password'
                                    className='p-3 rounded w-full outline-gray-100 border border-gray-100'
                                    required
                                />
                            </div>
                            <div className='bg-[#998E8D] m-3 text-white rounded'>
                                <button type="button" className='w-full p-4'>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* my subscription */}

            <div className="className='justify-center items-center my-20">
                <form >
                    <div className="grid grid-cols-7 gap-4 justify-between mx-32">
                        <div className="flex flex-col justify-cente items-center col-span-2">
                            <p className="font-extrabold font-manrope text-[26px]">My Subscription</p>
                        </div>
                        <div className="col-span-5 border border-yellow-300 h-[486px] rounded-2xl relative p-5">
                           <span className="absolute -top-9 -right-7">
                                <Image src={icon2} alt="image"/>
                           </span>
                           <div className="flex ">
                                <div>
                                    <Image src={icon3} alt="icon" className=" "/>    
                                </div>
                                <div className="">
                                    <p className="flex justify-between">
                                        <span>Basic</span>
                                        <span>4,500</span>
                                    </p>    
                                    <p>For users who need simple image generation with limited features.</p>
                                </div>
                           </div>
                            <div className='m-3'>
                                <button type="button" className='w-full p-4 flex items-center justify-center border rounded-xl'>Upgrade Plan <GoArrowUpRight /></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
};

export default EditProfile;