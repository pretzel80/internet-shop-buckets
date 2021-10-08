import React from 'react';
import Button from "../Button/Button";
import Favorite from "../Favorite/Favorite";
import "./Card.css"
import DeleteCross from "../DeleteCross/DeleteCross";
import {useDispatch, useSelector} from "react-redux";
import {favoritesOperations} from "../../store/favorites";
import {modalOperations, modalSelectors} from "../../store/modal";

const Card = ({card, isFavorites, flag, quantity}) => {

    const dispatch = useDispatch()
    const isModal = useSelector(modalSelectors.getModal())

    return (
        <div className={flag === 'cart' ? "cardCart" : "card"}>
            {!flag && <div className="favoriteStar"
                           onClick={
                               () => dispatch(favoritesOperations.toggleFavorites(card.id))
                           }>
                <Favorite
                    filled={(!!isFavorites)}
                    color={"red"}/>
            </div>}
            <div className={flag === 'cart' ? "cardCartImg" : "cardImg"}>
                <img src={card.src} alt="#"/>
            </div>
            <div className={flag === 'cart' ? "cardCartTitle" : "cardTitle"}>
                {card.name}
            </div>
            <div className="cardArticle">
                    <span className={flag === 'cart' ? "spanCartArticle" : "spanArticle"}>
                        {flag === 'cart' ? '' : "Article:"}
                    </span>{card.article}
            </div>
            <div className={flag === 'cart' ? "cardCartPrice" : "cardPrice"}>
                {card.price}<span className="spanPrice">
                    {flag !== 'cart' ? '' : " UAH"}
                    </span>
            </div>
            {!flag && <div className="purchaseBtn">
                {!isModal && <Button
                    text="Купить"
                    onClick={
                        () => {
                            dispatch(modalOperations.toggleModal(card.id))
                        }
                    }
                />}
            </div>}
            {flag && <div className="quantityCart">
                {quantity}<span className="spanQuantity">
                    {flag !== 'cart' ? '' : " шт"}
                    </span>
            </div>}
            {flag && <div className="amountTotal">
                {(quantity) * card.price}<span className="spanAmount">
                    {flag !== 'cart' ? '' : " UAH"}
                    </span>
            </div>}
            {flag && <div className="deleteCors"
                          onClick={() => {
                              dispatch(modalOperations.toggleModal(card.id))
                          }}>
                <DeleteCross color={"red"}
                />
            </div>}
        </div>
    );
}

export default Card;