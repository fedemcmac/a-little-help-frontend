import React from 'react';  
import JobCard from './JobCard'

const MyTasksList = ({ createdJobs, helpingJobs}) => {
    return(
        <div className="scrollable">
            <h4>Created tasks:</h4>
            {createdJobs.length === 0 ?
            "You haven't created any tasks yet" :
                createdJobs.map(job => <JobCard key={job.title} {...job}/>)
            }
            <h4>Accepted tasks:</h4>
            {helpingJobs.length === 0 ?
                "You haven't volunteered for any tasks yet" :
                helpingJobs.map(job => <JobCard key={job.title} {...job}/>)}
        </div>
    )
}

export default MyTasksList