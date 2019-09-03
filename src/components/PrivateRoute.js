import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({user, component: Component, rest}) => {
    return(
    <Route {...rest} render={(props) => (
        user ? <Component {...props} {...rest} />
        :
        <Redirect to="/home"/>
    )}/>
    )
}

export default PrivateRoute