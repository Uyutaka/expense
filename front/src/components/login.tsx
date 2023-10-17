import axios from 'axios'
import { useState } from 'react'

export default function Login() {
    const [isAPISuccess, setIsAPISuccess] = useState(false)
    const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" aria-label="email" onChange={(e) => {
                    setEmail(e.target.value)
                    if (e.target.value !== '' && password !== '') {
                        setIsLoginBtnDisabled(false)
                    } else {
                        setIsLoginBtnDisabled(true)
                    }
                }} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" aria-label="password" onChange={(e) => {
                    setPassword(e.target.value)
                    if (email !== '' && e.target.value !== '') {
                        setIsLoginBtnDisabled(false)
                    } else {
                        setIsLoginBtnDisabled(true)
                    }
                }} value={password} />
                <br />
                <button onClick={async () => {
                    await axios.post('/login', { email: 'email', password: 'pwd', csrf: 'csrf' })
                    setIsAPISuccess(true)
                }} disabled={isLoginBtnDisabled}>Login</button>
                {isAPISuccess && <div>success</div>}
            </div>
        </>
    )
}
