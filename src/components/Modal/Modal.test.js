import {getByText, render} from "@testing-library/react";
import Modal from "./Modal";
import store from "../../store/store";
import {Provider} from "react-redux";

describe('Test modal window', () => {
    test('Smoke test modal window', () => {
        render(
            <Provider store={store}>
                <Modal/>
            </Provider>
        )
    })

    test('Check presence of all elements ', () => {
        const {container} = render(
            <Provider store={store}>
                <Modal/>
            </Provider>
        )
        expect(container.getElementsByClassName('modalOverlay').length).toBe(1)
        expect(container.getElementsByClassName('modalWindow').length).toBe(1)
        expect(container.getElementsByClassName('modalHeader').length).toBe(1)
        expect(container.getElementsByClassName('modalCrossWrapper').length).toBe(1)
        expect(container.getElementsByClassName('modalCross').length).toBe(1)
        expect(container.getElementsByClassName('modalText').length).toBe(1)
        expect(container.getElementsByClassName('modalFooter').length).toBe(1)
    })


    test('Is has modal window button "Ok" and button "Отмена"', () => {
        const {container, getByText} = render(
            <Provider store={store}>
                <Modal/>
            </Provider>
        )

        expect(container).toContainElement(getByText('Ок'))
        expect(container).toContainElement(getByText('Отмена'))
    })

    test('Test text in modal from props', () => {
        const {container, getByText} = render(
            <Provider store={store}>
                <Modal textHeader={'Text1'} textMain={'Text2'}/>
            </Provider>
        )

        expect(container).toContainElement(getByText('Text1'))
        expect(container).toContainElement(getByText('Text2'))
    })


    test('Is has modal window background color with props', () => {
        render(
            <Provider store={store}>
                <Modal colorBG={'red'}/>
            </Provider>
        )

        expect(document.querySelector('.modalWindow')).toHaveStyle('backgroundColor : red')
    })

    test('Is has modal header background color with props', () => {
        render(
            <Provider store={store}>
                <Modal colorBG={'blue'}/>
            </Provider>
        )

        expect(document.querySelector('.modalHeader')).toHaveStyle('backgroundColor : blue')
    })

    test('Is has modal window SVG modalCross', () => {
        render(
            <Provider store={store}>
                <Modal colorBG={'blue'}/>
            </Provider>
        )
        const svg = document.querySelector('.modalCross')
        expect(document.querySelector('.modalCrossWrapper')).toContainElement(svg)
    })
})