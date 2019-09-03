import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../adapters/API";

class JobShow extends Component {
  state = {
    selectedJob: null
  };

  componentDidMount() {
    //   debugger
    const jobId = this.props.match.params.id;

    API.showJob(jobId).then(job => {
    //   debugger;
      if (job.error) {
        console.log("Invalid job id");
      } else {
        this.setState({ selectedJob: job.job })
        console.log(this.state.selectedJob.title)
      }
    });
    //   console.log("Job: ", job);
    //   if (job !== undefined) {
    //     console.log(job);
    //   } else {
    //     console.log("didnt work");
    //   }
    // .then(data => this.setState({ selectedJob: data.job }))
    // }
  }

  render() {
    return <div>{this.state.selectedJob !== null ? this.state.selectedJob.title : ""}</div>
  }             

}

export default withRouter(JobShow);
