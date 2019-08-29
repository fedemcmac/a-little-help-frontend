import React, { useState } from 'react'

const Signup = ({ handleSubmit, turnAuthOff }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            turnAuthOff()
            handleSubmit({ username, email, password })
            setUsername('')
            setEmail('')
            setPassword('')
        }}>

                <label>Username:</label>
                <input placeholder="Username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                <label>Email:</label>
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Password:</label>
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Sign up"/>
            </form>

            <p>Already have an account?</p>
        </div>
    )
}

export default Signup