import React from 'react';  
import JobCard from './JobCard'

const MyTasksList = ({ createdJobs, helpingJobs, dropTask, editTask}) => {
    return(
        <div className="scrollable">
            <h4>Created tasks:</h4>
            {createdJobs.length === 0 ?
            "You haven't created any tasks yet" :
                createdJobs.map(job => <JobCard key={`${job.id}-${job.title}`} {...job} handleButtonClick={editTask} buttonText="EDIT TASK"/>)
            }
            <h4>Accepted tasks:</h4>
            {helpingJobs.length === 0 ?
                "You haven't volunteered for any tasks yet" :
                helpingJobs.map(job => <JobCard key={`${job.id}-${job.title}`} {...job} handleButtonClick={dropTask} buttonText="DROP TASK" />)}
        </div>
    )
}

export default MyTasksList