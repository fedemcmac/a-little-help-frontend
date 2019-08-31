import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Instructions from './Instructions'

const MembersArea = ({ user, logOut, jobs, submitJob }) => {
        return(
            <div>
            {/* <div><button onClick={logOut}>Log out</button></div>  */}
            {user.instructions ?
            <BrowserRouter>
                <Redirect to="/instructions" />
                <Route path='/instructions' component={Instructions} />
            </BrowserRouter> :
            <BrowserRouter>
                <Redirect to="/dashboard" />
                <Route path="/dashboard" component={() => <Dashboard submitJob={submitJob} user={user} logOut={logOut} jobs={jobs}/>}/>
            </BrowserRouter> 
            }
            </div>
        )
}

export default MembersArea