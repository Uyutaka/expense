import axios from 'axios'
import { useState } from 'react'

export default function Login() {
    const [isAPISuccess, setIsAPISuccess] = useState(false)
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" aria-label="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" aria-label="password" />
                <br />
                <button onClick={async () => {
                    await axios.post('/login', { email: '', password: '', csrf: 'csrf' })
                    setIsAPISuccess(true)
                }}>Login</button>
                {isAPISuccess && <div>success</div>}
            </div>
        </>
    )
}
