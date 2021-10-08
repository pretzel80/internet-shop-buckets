import types from "./types";

const initialState = {
    isModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_MODAL: {
            return {
                ...state,
                isModal:
                    (typeof (action.payload) === "number" || action.payload === "openModal")
                        ? action.payload
                        : false
            }
        }

        default : {
            return state
        }
    }
}

export default reducer