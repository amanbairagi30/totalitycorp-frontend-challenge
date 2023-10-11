export const cartReducers = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state , cart : [...state.cart, {...action.payload,qty : 1}] };
            break;
        case "REMOVE_FROM_CART":
            return {...state , cart : state.cart.filter((cartitem)=> cartitem.id !== action.payload.id) };
            break;
    
        default:
            break;
    }
}