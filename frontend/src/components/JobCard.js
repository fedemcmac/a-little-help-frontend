import React from 'react';

const JobCard = ({ title, summary, handleButtonClick, buttonText }) => {
    return(
        <div>
            <h3>{title}</h3>
            <h6>{summary}</h6>
            <button onClick={handleButtonClick}>{buttonText}</button>
        </div>
    )
}

export default JobCard