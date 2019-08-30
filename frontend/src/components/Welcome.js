import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Route, Switch, withRouter} from "react-router-dom"

class Welcome extends Component {
    
    // state = {
    //     login: false,
    //     signup: false
    // }

    // toggleSignup = () => {
    //     this.state.signup === this.state.login ?
    //     this.setState({ signup: !this.state.signup}) 
    //       :
    //     this.setState({ signup: !this.state.signup, login: !this.state.login })
    //   }
      
    //   toggleLogin = () => {
    //     this.state.login === this.state.signup ?
    //     this.setState({ login: !this.state.login}) 
    //       :
    //     this.setState({ login: !this.state.login, signup: !this.state.signup })
    //   }
    
    //   turnAuthOff = () => {
    //     this.setState({ login: false, signup: false})
    //   }

    goLogin = () => {
        this.props.history.push('/login')
    }
    
    goSignup = () => {
        this.props.history.push('/signup')
    }

    render() {
        let { signUp, logIn } = this.props
    return(
        <div>
            <h1> A Little Help </h1>
            <h3> Independent volunteering <br /> on the micro scale </h3>
            <Switch>
                <Route path="/login" component={(props) => <Login {...props} handleSubmit={logIn}/>} />
                <Route exact path="/signup" component={(props) => <Signup {...props} handleSubmit={signUp}/>} />
            </Switch>
            {this.props.location.pathname === "/" ? 
            <>
                <button onClick={this.goLogin}>LOGIN</button><br />
                <button onClick={this.goSignup}>SIGN UP</button>
            </>
            :
            null
            }
            {/* {this.props.location} */}
            {/* <button onClick={this.goLogin}>LOGIN</button><br />
            <button onClick={this.goSignup}>SIGN UP</button> */}

            {/* { !this.state.login && !this.state.signup ? 
            <>
            <button onClick={this.toggleLogin} name="login">LOGIN</button><br />
            <button onClick={this.toggleSignup} name="signup">SIGN UP</button>
            </>
            :
            this.state.login ?
            <Login handleSubmit={logIn} turnAuthOff={this.turnAuthOff}/> : 
            <Signup handleSubmit={signUp} turnAuthOff={this.turnAuthOff}/>
            } */}
            
        </div>
    )
    }
}

export default withRouter(Welcome);