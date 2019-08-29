import React, { Component } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import API from "./adapters/API";
import JobForm from "./components/JobForm";
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from "./components/Home"
import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends Component {
  state = { 
    user: undefined,
    jobs: []
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (!user.error) this.setState({ user: user, jobs: user.created_jobs});
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
        { !this.state.user ? <Home signUp={this.signUp} logIn={this.logIn}/> : <div><button onClick={this.logOut}>Log out</button></div> }
        {this.state.user &&
        <JobForm submit={this.submitJob}/>}
      </div>
    );
  }
}

export default App;
