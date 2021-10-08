import types from "./types";


const initialState = {
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_FAVORITES: {
            return {
                ...state,
                favorites:
                    state.favorites.includes(action.payload)
                        ? state.favorites.filter((item) => item !== action.payload)
                        : [...state.favorites, action.payload]
            }
        }

        default : {
            return state
        }
    }
}

export default reducer