import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
    it('renders the application heading', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', {
                name: /react github pages demo/i,
            }),
        ).toBeInTheDocument()
    })

    it('increments the count when the button is clicked', async () => {
        const user = userEvent.setup()

        render(<App />)

        expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')

        await user.click(
            screen.getByRole('button', {
                name: /increment/i,
            }),
        )

        expect(screen.getByTestId('count')).toHaveTextContent('Count: 1')
    })
})