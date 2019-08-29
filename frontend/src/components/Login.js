import React, { useState } from 'react'

const Login = ({ handleSubmit, turnAuthOff }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            turnAuthOff();
            handleSubmit({ email, password })
            setEmail('')
            setPassword('')
        }}>
                <label>Email:</label>
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Password:</label>
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Login"/>
            </form>

            <p>Don't have an account?</p>
        </div>
    )
}
export default Login