// import React, { Component } from 'react';
// import { Provider } from "react-redux";
// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";

// import store from "./configs";
// // import PropTypes from 'prop-types';

// import {
//   Home,
//   Login,
//   // CreateMeetup,
//   Explore,
// } from './pages';
// import {
//   Header,
// } from './components/Organisms';
// import {
//   NavBar,
// } from './components/Molecules';
// import {
//   CustomLink,
// } from './components/Atoms';

// import './App.css';

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="root">

//             <Header>
//               <NavBar className="header_left">
//                 <CustomLink exact to="/" title='Qtemu'/>
//                 {/* <CustomLink to="/create" title='Create Meetup'/> */}
//                 <CustomLink to="/explore" title='Explore'/>
//               </NavBar>
//               <NavBar className="header_right">
//                 <CustomLink to="/login" title='Login'/>
//               </NavBar>
//             </Header>

//             <Route exact path="/" component={Home}/>
//             {/* <Route path="/create" component={CreateMeetup}/> */}
//             <Route path="/explore" component={Explore}/>
//             <Route path="/login" component={Login}/>

//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// };


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <Router>
      <div>
       <Link exact to='/'>Home</Link>
       <Link to='/about'>About</Link>
     
       <Route exact path='/' component= {Home}/>
       <Route path='/about' render= {() => (<div>Hello About</div>)}/>
      </div>
      </Router>
    )
  }
}
