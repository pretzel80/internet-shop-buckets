import {combineReducers} from "redux";
import cart from './cart'
import favorites from './favorites'
import modal from './modal'
import shop from './shop'

const reducers = combineReducers({
    cart,
    favorites,
    modal,
    shop
})

export default reducers;