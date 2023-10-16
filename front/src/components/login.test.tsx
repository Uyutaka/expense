import { render, screen, waitFor } from '@testing-library/react'
import Login from './login'
import userEvent from '@testing-library/user-event'
import axios from 'axios';
const mockPost = jest.spyOn(axios, 'post').mockResolvedValue(undefined)

describe('Login', () => {
    it("should render 'Welcome' text", () => {
        render(<Login />)
        expect(screen.getByText('Welcome')).toBeInTheDocument()
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
    it("should render login button", () => {
        render(<Login />)
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
    })
    it("should render 'success' after clicking login button with valid email & pwd", async() => {
        render(<Login />)
        userEvent.click(screen.getByRole('button', { name: 'Login' }))

        mockPost.mockResolvedValueOnce({ data: { success: true } })
        expect(mockPost).toHaveBeenCalledWith('/login', { email: '', password: '', csrf: 'csrf' })
        await waitFor(() => {
            expect(screen.getByText('success')).toBeInTheDocument()
        })
    })
})
