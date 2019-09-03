import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../adapters/API";

class JobShow extends Component {
  state = {
    selectedJob: null
  };

  componentDidMount() {
    const jobId = this.props.match.params.id;
    API.showJob(jobId).then(job => {
      if (job.error) {
        console.log("Invalid job id");
      } else {
        this.setState({ selectedJob: job.job });
      }
    });
  }

  renderJob = () => {
    if (this.state.selectedJob !== null) {
      return (
        <div>
          <h2>Title: {this.state.selectedJob.title}</h2>
          <h3>Summary: {this.state.selectedJob.title}</h3>
          <h4>Category: {this.state.selectedJob.category}</h4>
          <h4>Description: </h4>
          <p>{this.state.selectedJob.description}</p>
          {this.state.selectedJob.owner.id === this.props.userId ? (
            <div>
                <button onClick={() => this.props.editJob(this.state.selectedJob)}>EDIT TASK</button>
                <button onClick={() => this.props.deleteJob(this.state.selectedJob.id)}>DELETE TASK</button>
            </div>
          ) : (
            this.state.selectedJob.helpers.find(user => user.id === this.props.userId) ?
            <button onClick={() => this.props.dropJob(this.state.selectedJob.id)}>DROP TASK</button> :
            <button onClick={() => this.props.acceptJob(this.state.selectedJob.id)}>ACCEPT TASK</button>
          )}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderJob()}</div>;
  }
}

export default withRouter(JobShow);
