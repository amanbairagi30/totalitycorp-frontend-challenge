import React from 'react'
// import { HiOutlineAdjustmentsHorizontal} from "react-icons/hi"
import { TbAdjustmentsAlt } from "react-icons/tb"

import { cartState } from '../context/context'
import ProductCard from './ProductCard'


const HeroSection = () => {
  const [toggle, setToggle] = React.useState(true);

  const { state: { products } } = cartState();
  console.log(products)

  return (
    <main className='flex'>
      <div className='mx-auto w-[95vw] my-4'>

        {/* Product Listngs and Filter Section */}

        <div className='m-4 flex gap-4 items-center '>
          <TbAdjustmentsAlt onClick={() => setToggle(!toggle)} className={`text-3xl ${toggle ? `rotate-90` : ``} cursor-pointer`} />
          <input type="text" placeholder='Search' className='bg-transparent border w-[100%] h-[3rem] px-4 outline-none' />
        </div>

        <div className={`grid grid-cols-4 m-4 gap-4`}>

          <aside className={`${toggle ? `hidden` : `col-span-1`}  border`}>Sidebar</aside>
          <div className={`grid gap-8 ${toggle ? `col-span-4  gap-4` : `col-span-3 grid-cols-2`} py-2 lg:grid-cols-4 md:grid-cols-3 resp`}>

            {/* Items will get mapped out from here */}

            {products.map((item, index) => {
              return (
                <>
                  <ProductCard
                    item = {item}
                  />
                </>
              )
            })}

          </div>

        </div>

      </div>
    </main >
  )
}

export default HeroSection
