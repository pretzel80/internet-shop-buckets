import React from 'react';
import "./FavoritesPage.css"
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";
import {favoritesSelectors} from "../../store/favorites";
import {modalSelectors} from "../../store/modal";

const FavoritesPage = ({cards}) => {

    const favoritesArr = useSelector(favoritesSelectors.getFavorites())
    const isModal = useSelector(modalSelectors.getModal())

    const cardsListsFavorites = cards.map(card => <div key={card.article}>
        <Card
            card={card}
            isFavorites={favoritesArr.includes(card.id)}
        />
    </div>)

    return (
        <div>
            <div className="cardList">
                {cardsListsFavorites}
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

export default FavoritesPage;