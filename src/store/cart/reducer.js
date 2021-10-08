import types from "./types";

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_TO_CART: {

            return {
                ...state,
                cart:
                    state.cart.find(item => item.id === action.payload)

                        ? state.cart.map(elem => elem.id === action.payload
                            ? {...elem, count: elem.count + 1}
                            : elem)

                        : [...state.cart, {id: action.payload, count: 1}]
            }
        }

        case types.DELETE_FROM_CART: {
            return {
                ...state,
                cart:
                    state.cart.filter(item => item.id !== action.payload)
            }
        }

        case types.CHECKOUT_CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }

        default : {
            return state
        }
    }
}

export default reducer