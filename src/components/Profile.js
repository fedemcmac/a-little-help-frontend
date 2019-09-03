import React from 'react';

const Profile = ({ username, email, created_jobs, helping_jobs, logOut }) => {
    return(
        <div>
            <h3>Username: {username}</h3>
            <h3>{email}</h3>
            <h3>Tasks created:{created_jobs.length}</h3>
            <h3>Tasks booked:{helping_jobs.length}</h3>
            {/* implement photo upload */}
            <div><button onClick={logOut}>Log out</button></div> 
            <h3>add link to instructions & edit informations</h3>
        </div>
    )
}

export default Profile