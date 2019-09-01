import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Instructions from './Instructions'
import Profile from './Profile'
import BrowseTasksList from './BrowseTasksList'
import MyTasksList from './MyTasksList'
import JobForm from './JobForm'
import Navbar from './Navbar';

const MembersArea = ({ user, logOut, jobs, submitJob }) => {
        return(
            <BrowserRouter>
            <div>
            {/* <div><button onClick={logOut}>Log out</button></div>  */}
            {user.instructions ?
                <Redirect to="/instructions" />
                :
                <Navbar />
                // <Redirect to="/dashboard" />
            }
            <Route path='/instructions' component={Instructions} />
            <Route path="/dashboard" component={() => <Profile {...user} logOut={logOut}/>}/>
            <Route path="/browseTasks" component={() => <BrowseTasksList jobs={jobs}/>}/>
            <Route path="/myTasks" component={() => <MyTasksList createdJobs={user.created_jobs} helpingJobs={user.helping_jobs}/>}/>
            {/* // <Route path="/profile" component={() => <Profile {...user} logOut={logOut}/>}/> */}
            <Route path="/createTask" component={() => <JobForm submit={submitJob}{...user}/>}/>
            </div>
            </BrowserRouter> 
        )
}

export default MembersArea