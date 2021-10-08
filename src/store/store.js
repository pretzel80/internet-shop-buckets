import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.cart))
    localStorage.setItem('favorites', JSON.stringify(store.getState().favorites.favorites))
})

export default store;