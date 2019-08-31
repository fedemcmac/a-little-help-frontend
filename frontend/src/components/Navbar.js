import React, { Component } from "react";

class Navbar extends Component {

    // state = {
    //     dashBoard: true,
    //     browseTasks: false,
    //     myTasks: false,
    //     profile: false
    // }

  render() {
    return (
      <div className="navbar">
        {/* <Switch>
          <Route exact path="/profile" component={Profile} />
        </Switch> */}
        <button value="dashboard" onClick={this.props.handleClick}>Dashboard</button>
        <button value="browseTasks" onClick={this.props.handleClick}>Browse all tasks</button>
        <button value="myTasks" onClick={this.props.handleClick}>My tasks</button>
        <button value="profile" onClick={this.props.handleClick}>Profile</button>
        <button value="createTask" onClick={this.props.handleClick}>New task</button>
        {/* <Link to="/profile">Profile</Link> */}
      </div>
    );
  }
}

export default Navbar;
