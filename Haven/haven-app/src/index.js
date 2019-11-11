import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import WelcomePage from './components/welcomepage.component';
import SignIn from './components/sign-in-page.component';
import UserList from './components/user-list.component';

const routing = (
  <Router>
    <Route exact path = "/" component = {WelcomePage} />
    <Route path="/signin" component = {SignIn}/>
    <Route path="/userlist" component = {UserList}/>
  </Router>
)


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import App from './App'
// import Users from './users'
// import Contact from './contact'
// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/users">Users</Link>
//         </li>
//         </ul>
//       <Route exact path="/" component={App} />
//       <Route path="/users" component={Users} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'))
