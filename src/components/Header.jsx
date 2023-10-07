import React from 'react'
import {BsCart3} from "react-icons/bs"


const Header = () => {
  return (
    <nav className=' shadow-sm shadow-gray-400  h-[60px] flex'>
        <div className='h-full  mx-auto  w-[95%] px-4 2xl:w-[50%]  flex items-center justify-between'>

            {/* Logo */}
            <div className='text-xl font-bold'>Logo</div>

            {/* Profile */}
            <div className='flex items-center gap-4'>
                <div>
                    <BsCart3 className='text-xl font-semibold cursor-pointer' />
                </div>
                <img className='w-[2rem] rounded-full cursor-pointer' src="https://shorturl.at/DLXY9" alt="" />
            </div>

            

        </div>
    </nav>
  )
}

export default Header
