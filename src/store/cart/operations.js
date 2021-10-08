import actions from "./actions";

const {addToCart} = actions;
const {deleteFromCart} = actions;
const {checkoutClearCart} = actions;


const exportedObject = {
    addToCart,
    deleteFromCart,
    checkoutClearCart
}

export default exportedObject;
