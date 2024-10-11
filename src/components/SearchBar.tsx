import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className='h-40 flex justify-center'>
        <div className='flex items-center justify-center bg-white rounded-l-lg rounded-r-xl w-[40vw]'>
            <p>
                <select name="" id="" className='px-3 outline-none text-base font-semibold bg-white'>
                    <option value="filter">Filter By </option>
                    <option value="2">option two</option>
                </select>
            </p>
            <input type="text" placeholder='search for photos and illustration' className='p-3 w-full outline-none' />
            <button type="button" className='flex justify-center items-center bg-[#2F4858] p-3 text-white rounded-r-lg' ><CiSearch />Search</button>
        </div>
    </div>
  )
}

export default SearchBar;