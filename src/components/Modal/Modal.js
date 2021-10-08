import React from "react";
import "./Modal.scss"
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {modalOperations} from "../../store/modal";
import {cartOperations} from "../../store/cart";

const Modal = ({id, flagAction, colorBG, textHeader, textMain}) => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className="modalOverlay" onClick={() => {
                dispatch(modalOperations.toggleModal("Close"))
            }}/>
            <div className="modalWindow"
                 style={{
                     backgroundColor: colorBG,
                 }}
            >
                <div className="modalHeader"
                     style={{
                         backgroundColor: colorBG,
                     }}
                >
                    <>{textHeader}</>
                    <>{<div className="modalCrossWrapper"
                            onClick={() => {
                                dispatch(modalOperations.toggleModal("Close"))
                            }}>
                        <svg
                            className="modalCross"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                        </svg>
                    </div>
                    }</>
                </div>
                <div className="modalText">
                    {textMain}
                </div>
                <div className="modalFooter">
                    <Button
                        text="Ок"
                        id={id}
                        onClick={
                            () => {
                                if(flagAction === 'addToCart'){
                                    dispatch(cartOperations.addToCart(id))
                                }
                                if(flagAction === 'deleteFromCart'){
                                    dispatch(cartOperations.deleteFromCart(id))
                                }
                                dispatch(modalOperations.toggleModal())
                            }
                        }
                    />
                    <Button
                        text="Отмена"
                        onClick={() => {
                            dispatch(modalOperations.toggleModal("Close"))
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal