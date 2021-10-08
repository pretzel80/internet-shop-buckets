import types from "./types";

const initialState = {
    buckets: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_BUCKETS: {
            return {...state, buckets: action.payload, isLoading: true}
        }

        default : {
            return state
        }
    }
}

export default reducer