import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import Dashboard from './Dashboard'
import Instructions from "./Instructions";
import Profile from "./Profile";
import BrowseJobsList from "./BrowseJobsList";
import MyJobsList from "./MyJobsList";
import JobForm from "./JobForm";
import Navbar from "./Navbar";

const MembersArea = ({
  user,
  logOut,
  jobs,
  submitJob,
  acceptJob,
  dropJob,
  editJob,
  deleteJob
}) => {
  return (
    <BrowserRouter>
      <div>
        {/* <div><button onClick={logOut}>Log out</button></div>  */}
        {user.instructions ? <Redirect to="/instructions" /> : <Navbar />
        // <Redirect to="/dashboard" />
        }
        <Route path="/instructions" component={Instructions} />
        <Route
          path="/dashboard"
          component={() => <Profile {...user} logOut={logOut} />}
        />
        <Route
          path="/browse-tasks"
          component={() => <BrowseJobsList jobs={jobs} acceptJob={acceptJob} />}
        />
        <Route
          path="/my-tasks"
          component={() => (
            <MyJobsList
              createdJobs={user.created_jobs}
              helpingJobs={user.helping_jobs}
              dropJob={dropJob}
              editJob={editJob}
              deleteJob={deleteJob}
            />
          )}
        />
        {/* // <Route path="/profile" component={() => <Profile {...user} logOut={logOut}/>}/> */}
        <Route
          path="/create-task"
          component={() => <JobForm submit={submitJob} {...user} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default MembersArea;
