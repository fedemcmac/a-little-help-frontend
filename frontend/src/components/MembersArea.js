import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import Dashboard from './Dashboard'
import Instructions from "./Instructions";
import Profile from "./Profile";
import BrowseJobsList from "./BrowseJobsList";
import MyJobsList from "./MyJobsList";
import JobForm from "./JobForm";
import Navbar from "./Navbar";

class MembersArea extends Component {

    state = { selectedTask: {} }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <div><button onClick={logOut}>Log out</button></div>  */}
          {this.props.user.instructions ? <Redirect to="/instructions" /> : <Navbar />
          // <Redirect to="/dashboard" />
          }
          <Route path="/instructions" component={Instructions} />
          <Route
            path="/dashboard"
            component={() => <Profile {...this.props.user} logOut={this.props.logOut} />}
          />
          <Route
            path="/browse-tasks"
            component={() => (
              <BrowseJobsList jobs={this.props.jobs} acceptJob={this.props.acceptJob} />
            )}
          />
          <Route
            path="/my-tasks"
            component={() => (
              <MyJobsList
                createdJobs={this.props.user.created_jobs}
                helpingJobs={this.props.user.helping_jobs}
                dropJob={this.props.dropJob}
                editJob={this.props.editJob}
                deleteJob={this.props.deleteJob}
              />
            )}
          />
          {/* // <Route path="/profile" component={() => <Profile {...user} logOut={logOut}/>}/> */}
          <Route
            path="/create-task"
            component={() => <JobForm submit={this.props.submitJob} {...this.props.user} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default MembersArea;
