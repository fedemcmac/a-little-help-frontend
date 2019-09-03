import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <Switch>
          <Route exact path="/profile" component={Profile} />
        </Switch> */}

        <Link className="wordLink" to="/dashboard">
          Dashboard{" "}
        </Link>
        <Link className="wordLink" to="/browse-tasks">
          Browse Tasks{" "}
        </Link>
        <Link className="wordLink" to="/my-tasks">
          My Tasks{" "}
        </Link>
        <Link className="wordLink" to="/create-task">
          New Task
        </Link>
        {/* <Link to="/profile">profile</Link> */}
        {/* 
        <button value="dashboard" onClick={this.props.handleClick}>Dashboard</button>
        <button value="browseTasks" onClick={this.props.handleClick}>Browse all tasks</button>
        <button value="myTasks" onClick={this.props.handleClick}>My tasks</button>
        <button value="profile" onClick={this.props.handleClick}>Profile</button>
        <button value="createTask" onClick={this.props.handleClick}>New task</button>
 */}

        {/* <Link to="/profile">Profile</Link> */}
      </div>
    );
  }
}

export default Navbar;
