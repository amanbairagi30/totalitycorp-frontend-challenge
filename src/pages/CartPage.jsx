import React from 'react'
import { cartState } from '../context/context'
import { AiOutlineDelete } from 'react-icons/ai';

const CartPage = () => {

    const { state: { cart } } = cartState();
    return (
        <main className='flex'>
            <div className='mx-auto w-[95vw] my-4'>

                <div className='px-4'>
                    {cart.map((item, index) => {
                        return (
                            <>
                                <div className='border my-4 h-fit flex items-center md:flex-row flex-col px-4 rounded-lg justify-between'>


                                    <div className={` box ${!item.is_in_inventory && "opacity-[0.3]"} my-4 h-[50px] w-auto  rounded-md`}>
                                        <img className='w-full rounded-md h-full object-cover' src={item.image_url} alt="" />
                                    </div>

                                    <div>
                                        {item.name}
                                    </div>

                                    <div>
                                        <AiOutlineDelete className='text-3xl' />
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>

            </div>
        </main >
    )
}

export default CartPage
