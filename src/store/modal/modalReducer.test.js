import reducer from "./reducer";
import types from "./types";

const state = {
    isModal: false
}

describe('Modal reducer test', () => {

    test('Test reducer with "action.payload" === "number', () => {
        const action = {
            type: types.TOGGLE_MODAL,
            payload: 1
        }

        const newState = reducer(state, action)
        expect(newState.isModal).toBe(1)
    })

    test('Test reducer with "action.payload" === "openModal', () => {
        const action = {
            type: types.TOGGLE_MODAL,
            payload: 'openModal'
        }

        const newState = reducer(state, action)
        expect(newState.isModal).toBe('openModal')
    })

    test('Test reducer with "action.payload" === null', () => {
        const action = {
            type: types.TOGGLE_MODAL,
            payload: "Close"
        }

        const newState = reducer(state, action)
        expect(newState.isModal).toBe(false)
    })

})