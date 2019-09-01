// import React, { Component } from "react";
// import Navbar from "./Navbar";
// import Profile from './Profile'
// import BrowseTasksList from './BrowseTasksList'
// import MyTasksList from './MyTasksList'
// import JobForm from './JobForm'

// class Dashboard extends Component {
  
//     state = {
//         render: "dashboard"
//         // dashboard: true,
//         // browseTasks: false,
//         // myTasks: false,
//         // profile: false
//     }

//     // goProfile = () => {
//     //     this.props.history.push('/profile')
//     // }

//     // togglePages = (e) => {
//     //     for (let key in this.state) {
//     //         this.setState({ [key]: false})
//     //     }
//     //     this.setState({ [e.target.name]: true})
//     // }

//     // togglePages = (e) => {
//     //     this.setState({ render: e.target.value})
//     // }

//     // whatToRender = () => {
//     //     if (this.state.render === "dashboard") return;
//     //     if (this.state.render === "browseTasks") return <BrowseTasksList jobs={this.props.jobs}/>;
//     //     if (this.state.render === "myTasks") return <MyTasksList createdJobs={this.props.user.created_jobs} helpingJobs={this.props.user.helping_jobs}/>;
//     //     if (this.state.render === "profile") {return <Profile {...this.props.user} logOut={this.props.logOut}/>};
//     //     if (this.state.render === "createTask") {return <JobForm submit={this.props.submitJob}{...this.props.user}/>};
//     //     // <p>Already have an account?
//     //     //         <Link to="/welcome/login"> Login</Link>
//     //     //     {/* </p> */}
//     // }

//     render() {
//     return (
//       <div>          
//           <h1>merge dashboard and profile</h1>
//         {this.whatToRender()}
//         {/* <Navbar handleClick={this.togglePages} /> */}
//       </div>
//     );
//   }
// }

// export default Dashboard;
