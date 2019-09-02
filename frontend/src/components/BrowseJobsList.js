import React from 'react';
import JobCard from './JobCard'

const BrowseJobsList = ({ jobs, acceptJob }) => {
    return(
        <div>
            {jobs.map(job => <JobCard key={job.title} job={job} buttonText="ACCEPT TASK" handleButtonClick={acceptJob}/>)}
        </div>
    )
}

export default BrowseJobsList