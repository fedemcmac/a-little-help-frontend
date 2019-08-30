import React, { useState } from 'react'

const Login = ( props ) => {
    console.log(props)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            // turnAuthOff();
            props.handleSubmit({ email, password });
            setEmail('')
            setPassword('')
        }}>
                
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <input type="submit" value="LOGIN"/>
            </form>

            <p>Don't have an account?</p>
        </div>
    )
}
export default Login