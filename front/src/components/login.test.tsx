import { render, screen } from '@testing-library/react'
import Login from './login'
describe('Login', () => {
    it("should render 'Login' text", () => {
        render(<Login />)
        expect(screen.getByText('Login')).toBeInTheDocument()
    })
    it("should render 'Email' and 'Password' text", () => {
        render(<Login />)
        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Password')).toBeInTheDocument()
    })
    it("should render inputs for 'Email' and 'Password'", () => {
        render(<Login />)
        const inputEmail = screen.getByRole('textbox', { name: 'email' })
        expect(inputEmail).toBeInTheDocument()
        const inputPassword = screen.getByRole('textbox', { name: 'password' })
        expect(inputPassword).toBeInTheDocument()
    })
})
