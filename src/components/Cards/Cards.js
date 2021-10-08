import React from 'react';
import Card from "../Card/Card";
import "./Cards.css"
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";
import {favoritesSelectors} from "../../store/favorites";
import {modalSelectors} from "../../store/modal";

const Cards = ({cards}) => {

    const favoritesArr = useSelector(favoritesSelectors.getFavorites())
    const isModal = useSelector(modalSelectors.getModal())

    const cardsLists = cards.map(card => <div key={card.article}>
        <Card
            card={card}
            isFavorites={favoritesArr.includes(card.id)}
        />
    </div>)

    return (
        <div>
            <div className="cardList">
                {cardsLists}
            </div>
            {isModal && <Modal
                id={isModal}
                flagAction={'addToCart'}
                colorBG={"orange"}
                textHeader={'Добавление товара в корзину'}
                textMain={'Вы действительно хотите добавить выбранный товар в корзину ?'}
            />}
        </div>
    );
};

export default Cards;