import ReactCounter from './ReactCounter';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe('The frontend Counter', () => {
    test('is rendered to the screen', () => {
        render(<ReactCounter />)
        const counter = screen.getByText('frontend', { exact: false })
        expect(counter).toBeDefined()
        const value = screen.getByTestId('reactCounter')
        expect(Number(value.innerHTML)).toBe(0)
    })
    test('can be incremented', async () => {
        render(<ReactCounter />)
        const valueBefore = screen.getByTestId('reactCounter').innerHTML
        const buttons = screen.getAllByRole('button')
        await userEvent.click(buttons[0])
        const valueAfter = screen.getByTestId('reactCounter').innerHTML
        expect(buttons[0].innerHTML).toBe('+')
        expect(Number(valueAfter)).toBe(Number(Number(valueBefore) + 1))
    })
    test('can be decremented and reset', async () => {
        render(<ReactCounter />)
        const valueBefore = screen.getByTestId('reactCounter').innerHTML
        const buttons = screen.getAllByRole('button')
        await userEvent.click(buttons[2])
        const valueAfter = screen.getByTestId('reactCounter').innerHTML
        expect(buttons[2].innerHTML).toBe('-')
        expect(Number(valueAfter)).toBe(Number(Number(valueBefore) - 1))
        await userEvent.click(buttons[1])
        const valueFinal = screen.getByTestId('reactCounter').innerHTML
        expect(buttons[1].innerHTML).toBe('Reset')
        expect(Number(valueFinal)).toBe(0)
    })
})