import React from 'react';

const JobCard = ({ title, description }) => {
    return(
        <div>
            <h3>{title}</h3>
            <h6>{description}</h6>
        </div>
    )
}

export default JobCard