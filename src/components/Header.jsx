import React from 'react'
import { BsCart3 } from "react-icons/bs"
import Badge from '@mui/joy/Badge';
import { cartState } from '../context/context';
import { Link } from 'react-router-dom';


const Header = () => {

  const {state : {cart}} = cartState();

  return (
    <nav className=' shadow-sm shadow-gray-400  h-[60px] flex '>
      <div className='h-full  mx-auto  w-[95vw] px-4 2xl:w-[50vw]  flex items-center justify-between'>

        {/* Logo */}
        <div className='text-xl font-bold'>Logo</div>

        {/* Profile */}
        <div className='flex items-center gap-4'>
          <div className='w-[2rem] flex flex-col items-center'>
            <Badge badgeContent={cart.length}>
              <Link to={"/cart"}><BsCart3 className='text-xl top-[50%] font-semibold cursor-pointer' /></Link>
            </Badge>
          </div>
          <img className='w-[2rem] rounded-full cursor-pointer' src="https://img.icons8.com/fluency/48/000000/user-male-circle--v1.png" alt="" />
        </div>



      </div>
    </nav>
  )
}

export default Header
