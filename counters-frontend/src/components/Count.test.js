import Counter from './Counter';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('The counter component', () => {
    test('is rendered with the correct id and value', () => {
        const id = 'testCounter'
        const initialCounter = 0
        render(<Counter
            id={id}
            counter={initialCounter}
        />)
        const component = screen.getByText(id, { exact: false })
        expect(component).toBeDefined()
        const counter = screen.getByTestId(id)
        expect(counter.innerHTML).toBe('0')
    })
    test('invokes increase function on click', () => {
        const mockHandler = jest.fn()
        render(<Counter
            onIncrement={mockHandler}
        />)
        const button = screen.getByText('+')
        userEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
    test('invokes decrease function on click', () => {
        const mockHandler = jest.fn()
        render(<Counter
            onDecrement={mockHandler}
        />)
        const button = screen.getByText('-')
        userEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
    test('invokes reset function on click', () => {
        const mockHandler = jest.fn()
        render(<Counter
            onReset={mockHandler}
        />)
        const button = screen.getByText('Reset')
        userEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
})