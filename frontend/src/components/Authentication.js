import React from 'react';
import Signup from './Signup';
import Login from './Login';


const Authentication = ({ user, signUp, logIn, logOut }) => {
    return(
        <div>
            {
                user ? <div><button onClick={logOut}>Log out</button></div> :
                    <>
                        <Signup submit={signUp}/>
                        or
                        <Login submit={logIn}/>
                    </>
            }
        </div>
    )
}

export default Authentication