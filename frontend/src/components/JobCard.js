import React from "react";

const JobCard = ({ job, handleButtonClick, buttonText }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <h6>{job.summary}</h6>
      <button onClick={() => handleButtonClick(job.id)}>{buttonText}</button>
    </div>
  );
};

export default JobCard;
