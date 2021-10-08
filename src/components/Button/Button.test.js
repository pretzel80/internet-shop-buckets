import userEvent from '@testing-library/user-event'

import Button from "./Button";
import {
    // render,
    unmountComponentAtNode} from "react-dom";
import {render} from "@testing-library/react";

let container = null;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

describe('Test Button component', () => {
    test('Smoke Button test', () => {
        render(<Button/>, container)
    })

    test('Button has className', () => {
        render(<Button text={'Test Button'}/>, container)
        const button = document.querySelector('.buttonAddToCart')
        expect(button.classList.contains('buttonAddToCart')).toEqual(true)
    })

    test('Button has test text', () => {
        render(<Button text={'Test Button'}/>, container)
        const button = document.querySelector('.buttonAddToCart')
        expect(button.textContent).toBe('Test Button')
    })
})

describe('Test Button onClick function', () => {
    test('Is Button has a function onClick', () => {
        const testOnclick = jest.fn()
        const{getByTestId} = render(<Button onClick={testOnclick}/>)

        const testButton = getByTestId('testButton')

        expect(testOnclick).not.toHaveBeenCalled()
        userEvent.click(testButton)
        expect(testOnclick).toHaveBeenCalledTimes(1)
        userEvent.click(testButton)
        expect(testOnclick).toHaveBeenCalledTimes(2)
    })
})

describe('Button test snapshot', ()=> {

    test('Simple Button snapshot', ()=> {
        const {container} = render(<Button/>)
        expect(container).toMatchSnapshot()
    })

    test('Simple Button snapshot test with test-text', ()=> {
        const {container} = render(<Button text={'test-text'} id={1} onClick={()=>{}}/>)
        expect(container).toMatchSnapshot()
    })

})