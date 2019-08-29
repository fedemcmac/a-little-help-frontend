import React, { useState } from 'react'

const Login = ({ submit }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            submit({ email, password })
            setEmail('')
            setPassword('')
        }}>
                <label>Email:</label>
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Password:</label>
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
export default Login