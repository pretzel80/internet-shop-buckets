import types from "./types";

const toggleFavorites = id => ({
    type: types.TOGGLE_FAVORITES,
    payload: id
})


const exportedObject = {
    toggleFavorites
}

export default exportedObject;
