import React, { Component } from "react";
import "./App.css";
// import Authentication from "./components/Authentication";
import API from "./adapters/API";
// import JobForm from "./components/JobForm";
import Welcome from "./components/Welcome"
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import { withRouter, Route } from 'react-router-dom'
import MembersArea from "./components/MembersArea";
// import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  state = { 
    user: undefined,
    jobs: []
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (!user.error) {
        this.setState({ user: user, jobs: user.created_jobs})
        // this.props.history.push('/')
      } else {
        this.props.history.push('/welcome')
      } API.getJobs().then(data => this.setState({ jobs: data}))
    });
  }

  signUp = user => {
    API.signUp(user).then(user => this.setState({ user: user, jobs: user.created_jobs }));
  };

  logIn = user => {
    API.logIn(user).then(user => this.setState({ user: user, jobs: user.created_jobs }));
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined, jobs: [] });
    this.props.history.push('/welcome')
  };

  submitJob = (job) => {
    API.postJob(job)
      .then(data => this.setState({ user: { ...this.state.user}, jobs: [...this.state.jobs, data.job] } ))
      // .catch(errorPromise => {
      //   errorPromise
      //     .then(data => {
      //       this.setState({ errors: data.errors })
      //     })
      // })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ?
          <Route path={"/"} component={() => <MembersArea submitJob={this.submitJob}logOut={this.logOut} user={this.state.user} jobs={this.state.jobs}/>} />:
          <Route 
          path={"/welcome"} component={() => <Welcome signUp={this.signUp} logIn={this.logIn} history={this.props.history}/>} /> 
          // <div><button onClick={this.logOut}>Log out</button></div> 
        }

        
        {/* <Route exact path="/login" component={Login} handleSubmit={this.logIn}/>
        <Route exact path="/signup" component={Signup} handleSubmit={this.signUp}/> */}
        {/* { !this.state.user ? 
        <Home signUp={this.signUp} logIn={this.logIn}/> 
        : 
        <div><button onClick={this.logOut}>Log out</button></div> } */}
        {/* {this.state.user && */}

        {/* <PrivateRoute path="/create-job" user={this.state.user} component={JobForm} submit={this.submitJob}/> */}
        {/* <JobForm submit={this.submitJob}/> */}
        {/* } */}
      </div>
    );
  }
}

export default withRouter(App);
