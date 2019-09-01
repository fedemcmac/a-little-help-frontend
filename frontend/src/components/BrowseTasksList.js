import React from 'react';
import JobCard from './JobCard'

const BrowseTasksList = ({ jobs, acceptTask }) => {
    return(
        <div>
            {jobs.map(job => <JobCard key={job.title} {...job} buttonText="ACCEPT TASK" handleButtonClick={acceptTask}/>)}
        </div>
    )
}

export default BrowseTasksList