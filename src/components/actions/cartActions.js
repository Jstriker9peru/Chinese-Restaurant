import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './cartConstants.js';

export const addToCart = (id) => { 
    return { 
        type: ADD_TO_CART,
        id 
    }
}

export const removeFromCart = (id, quantity) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id,
            quantity
        }
    }
}

export const changeQuantity = (id, quantity) => {
    console.log('quantityValuessss', quantity);
    return {
        type: CHANGE_QUANTITY,
        payload: { 
            id,
            quantity
        }
    }
}