import React from 'react';
import JobCard from './JobCard'

const BrowseTasksList = ({ jobs }) => {
    return(
        <div>
            {jobs.map(job => <JobCard key={job.title} {...job}/>)}
        </div>
    )
}

export default BrowseTasksList