import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSolidStar } from 'react-icons/bi'
import { cartState } from "../context/context"

const ProductCard = ({ item }) => {

    const { state: { cart } ,dispatch} = cartState();
    // console.log(cart)

    return (
        <>
            <div className=' product-card  h-fit rounded-lg p-4 flex flex-col justify-between items-center'>

                <div>

                    {/* image containig box */}
                    <div className={` box ${!item.is_in_inventory && "opacity-[0.3]"} h-[200px] w-auto  rounded-md`}>
                        <img className='w-full rounded-md h-full object-cover' src={item.image_url} alt="" />
                    </div>

                    <div className={`my-6 ${!item.is_in_inventory && "opacity-[0.3]"}`}>
                        <div className=' h-[2.5rem] overflow-hidden flex-nowrap'>
                            <h1 className='text-[1.7rem] font-bold'>{item.name}</h1>
                        </div>

                        {/* reviews */}
                        <div className='flex gap-2 items-center'>

                            <div className='flex gap-2 my-2'>
                                <BiSolidStar className='text-yellow-500' />
                                <BiSolidStar className='text-yellow-500' />
                                <BiSolidStar className='text-yellow-500' />
                                <BiSolidStar className='text-yellow-500' />
                                <BiSolidStar className='text-yellow-500' />
                                <BiSolidStar className='text-yellow-500' />
                            </div>
                            (33)
                        </div>

                        <div className=' flex justify-between items-center  mt-2'>
                            <p className='flex flex-col  items-start'>
                                {/* curr price  */}
                                <span className='text-xl font-bold'>Rs.{item.price * 80} /-</span>
                                <span className='text-sm line-through text-gray-400' >Rs.{item.removed_price * 80} /-</span>
                            </p>

                            <p className='bg-green-900 text-xs border w-fit border-green-500 py-1 px-1 rounded-lg'>Save {item.discount_percentage}%</p>
                        </div>
                    </div>

                </div>
                {/* Add to cart btn */}
                <div className={` gap-2 flex items-center w-full h-[3rem] rounded-md`}>

                    {
                        cart.some((product) => product.id === item.id) ? (
                            <button
                                // disabled={!item.is_in_inventory}
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                    });
                                }}
                                className={`${item.is_in_inventory ? `border-red-600 bg-red-600` : ` border-[#feb444] bg-[#9a7949]`} hover:border-2 hover:bg-transparent  rounded-md h-full w-[80%]`}>
                                Remove from cart</button>

                        ) : (
                            <button
                                disabled={!item.is_in_inventory}
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: item,
                                    });
                                }}
                                className={`${item.is_in_inventory ? `border-[#036cc0] bg-[#036cc0]` : ` border-[#feb444] bg-[#9a7949]`} hover:border-2 hover:bg-transparent  rounded-md h-full w-[80%]`}>{item.is_in_inventory ? "Add to cart" : "Sold Out"}</button>
                        )

                    }

                    <p className='w-[20%] border-2 cursor-pointer border-red-500  rounded-md h-full flex items-center justify-center'>
                        <AiOutlineHeart className='text-xl text-red-500' />
                    </p>
                </div>
            </div>


        </>
    )
}

export default ProductCard
