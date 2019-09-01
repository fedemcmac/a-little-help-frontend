import React from 'react';

const JobCard = ({ title, summary }) => {
    return(
        <div>
            <h3>{title}</h3>
            <h6>{summary}</h6>
        </div>
    )
}

export default JobCard