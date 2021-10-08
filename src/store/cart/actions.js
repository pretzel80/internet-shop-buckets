import types from "./types";

const addToCart = (id) => ({
    type: types.ADD_TO_CART,
    payload: id
})

const deleteFromCart = (id) => ({
    type: types.DELETE_FROM_CART,
    payload: id
})

const checkoutClearCart = () => ({
    type: types.CHECKOUT_CLEAR_CART
})


const exportedObject = {
    addToCart,
    deleteFromCart,
    checkoutClearCart
}

export default exportedObject;