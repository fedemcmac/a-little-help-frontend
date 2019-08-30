import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom'

class MembersArea extends Component {
    render() {
        return(
            <div>members only
            <div><button onClick={this.props.logOut}>Log out</button></div> 
            </div>
        )
    }
}

export default MembersArea