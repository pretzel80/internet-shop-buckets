import types from "./types";

const toggleModal = (modal) => ({
    type: types.TOGGLE_MODAL,
    payload: modal
})

const exportedObject = {
    toggleModal
}

export default exportedObject;
