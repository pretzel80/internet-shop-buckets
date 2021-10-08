import React, {useEffect} from 'react';
import "./ShoppingCart.css"
import axios from "axios";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {cartSelectors} from "../../store/cart";
import {modalOperations, modalSelectors} from "../../store/modal";
import {bucketsSelectors} from "../../store/shop";
import FormPurchase from "../FormPurchase/FormPurchase";

const ShoppingCart = () => {

    const dispatch = useDispatch()
    const buckets = useSelector(bucketsSelectors.getBuckets())
    const cart = useSelector(cartSelectors.getCart())
    const isModal = useSelector(modalSelectors.getModal())
    let purchaseTotal = []
    let cardsInCart = buckets.filter(card => cart.some(elem => card.id === elem.id))

    useEffect(() => {
        axios("/api/shop")
            .then(res => {
                const arr = res.data;
                cardsInCart = arr.filter(card => cart.some(elem => card.id === elem.id))
            })
    }, [cart])

    const cardsListsCart = cart.map(item => <div key={item.id}>
        <Card
            card={cardsInCart.find(card => card.id === item.id)}
            flag={'cart'}
            quantity={item.count}
        />
    </div>)

    let totalCountAmount = 0
    if (cardsInCart.length !== 0) {
        cart.forEach((item) => {
            const price = cardsInCart.find(card => card.id === item.id).price
            totalCountAmount = totalCountAmount + (price * item.count)
            item = {...item, price: price}
            purchaseTotal = [...purchaseTotal, item]
        })
    }

    return (
        <div>
            <div className="cart-header">
                {cart.length === 0 ? <h3>Товаров в корзине нет</h3> : <h3>Товары в корзине</h3>}
            </div>
            <div className="cart-main">
                {cardsListsCart}
                {typeof (isModal) === "number" && <Modal
                    id={isModal}
                    flagAction={'deleteFromCart'}
                    colorBG={"red"}
                    textHeader={'Удаление товара из корзины'}
                    textMain={'Вы действительно хотите удалить выбранный товар из корзины ?'}
                />}
            </div>
            <div className="cart-footer">
                {cart.length !== 0 && <h3>Общая сумма заказа составляет: {totalCountAmount} UAH</h3>}
                {cart.length !== 0 && <Button text={'Оформить покупку'}
                                              onClick={() => {
                                                  dispatch(modalOperations.toggleModal("openModal"))
                                              }}
                />}
                {isModal === "openModal" &&
                <FormPurchase cartTotal={purchaseTotal}/>
                }
            </div>
        </div>
    );
};

export default ShoppingCart;