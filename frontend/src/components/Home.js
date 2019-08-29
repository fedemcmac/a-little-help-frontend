import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class Home extends Component {
    
    state = {
        login: false,
        signup: false
    }

    toggleSignup = () => {
        this.state.signup === this.state.login ?
        this.setState({ signup: !this.state.signup}) 
          :
        this.setState({ signup: !this.state.signup, login: !this.state.login })
      }
      
      toggleLogin = () => {
        this.state.login === this.state.signup ?
        this.setState({ login: !this.state.login}) 
          :
        this.setState({ login: !this.state.login, signup: !this.state.signup })
      }
    
      turnAuthOff = () => {
        this.setState({ login: false, signup: false})
      }

    render() {
        let { signUp, logIn } = this.props
    return(
        <div>
            <h1> A Little Help </h1>
            <h3> Independent volunteering on the micro scale </h3>
            { !this.state.login && !this.state.signup ? 
            <>
            <button onClick={this.toggleLogin} name="login">LOGIN</button><br />
            <button onClick={this.toggleSignup} name="signup">SIGN UP</button>
            </>
            :
            this.state.login ? <Login handleSubmit={signUp} turnAuthOff={this.turnAuthOff}/> : <Signup handleSubmit={logIn} turnAuthOff={this.turnAuthOff}/>
            }
            
        </div>
    )
    }
}

export default Home