import React from 'react';
import JobCard from './JobCard'

const BrowseJobsList = ({ jobs, acceptJob, redirectToTaskShowPage }) => {
    return(
        <div>
            {jobs.map(job => <JobCard key={job.title} job={job} buttonText="ACCEPT TASK" handleButtonClick={acceptJob} handleJobClick={redirectToTaskShowPage}/>)}
        </div>
    )
}

export default BrowseJobsList