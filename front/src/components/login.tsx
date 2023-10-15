
export default function Login() {

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
                <button>Login</button>
            </div>
        </>
    )
}
