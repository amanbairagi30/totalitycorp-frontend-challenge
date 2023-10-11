import React, { createContext, useContext, useReducer } from 'react'
import { Shoes } from '../sampleData';
import { cartReducers } from './Reducer';

const Cart = createContext();

const Context = ({children}) => {

  
  const [state, dispatch] = useReducer(cartReducers, {
    products: Shoes,
    cart: [],
  });

  console.log(state)

  return (
    <Cart.Provider  value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const cartState = () =>{
  return useContext(Cart)
}
