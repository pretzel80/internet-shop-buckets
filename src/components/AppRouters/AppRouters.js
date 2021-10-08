import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Cards from "../Cards/Cards";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import ShoppingCart from "../ShoppingСart/ShoppingCart";
import Error404 from "../Error404/Error404";
import {useSelector} from "react-redux";
import {favoritesSelectors} from "../../store/favorites";
import {modalSelectors} from "../../store/modal";
import {cartSelectors} from "../../store/cart";

const AppRouters = ({cards}) => {

    const favoritesArr = useSelector(favoritesSelectors.getFavorites())
    const isModal = useSelector(modalSelectors.getModal())
    const cart = useSelector(cartSelectors.getCart())

    return (
        <div className="shop">
            <Switch>
                <Redirect exact from={"/"} to={"/shop"}/>
                <Route exact path="/shop">
                    <Cards
                        cards={cards}
                    />
                </Route>
                <Route exact path="/favorites">
                    <FavoritesPage
                        cards={cards.filter(card => favoritesArr.some(id => card.id === id))}
                    />
                </Route>
                <Route exact path="/cart">
                    <ShoppingCart
                        cards={cards.filter(card => cart.some(elem => card.id === elem.id))}
                        cart={cart}
                        isModal={isModal}
                    />
                </Route>
                <Route exact path="*">
                    <Error404/>
                </Route>
            </Switch>
        </div>
    );
};

export default AppRouters;