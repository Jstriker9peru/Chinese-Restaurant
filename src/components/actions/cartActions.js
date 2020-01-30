import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './cartConstants.js';

export const addToCart = (addedItem) => {
    return { 
        type: ADD_TO_CART,
        addedItem
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
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