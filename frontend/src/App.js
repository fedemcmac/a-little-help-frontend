import React, { Component } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import API from "./adapters/API"

class App extends Component {

  state = { user: undefined }

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  // submitPost = (post) => {
  //   API.postPost(post)
  //     .then(data => this.setState({ user: { ...this.state.user, posts: [...this.state.user.posts, data.post] } }))
  //     .catch(errorPromise => {
  //       errorPromise
  //         .then(data => {
  //           this.setState({ errors: data.errors })
  //         })
  //     })
  // }






  render() {
    return (
      <div className="App">
        <Authentication user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/>
      </div>
    );
  }
}

export default App;
