import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import WelcomePage from './components/welcomepage.component';
import SignIn from './components/sign-in-page.component';
import FindUser from './components/find-user.component';
//import UserList from './components/user-list.component';
import UpdateUser from './components/update-user.component.js'
import UserProfile from './components/user-profile.component.js'
import Gallery from "./components/gallery.component.js";
import MyProfiles from "./components/myprofiles.component.js";
import viewProfile from "./components/view-profile.component.js";
import StandardProfile from "./components/standard_profile.components.js";
import ProfileList from "./components/profilesList.component.js";

const routing = (
  <Router>
    <Route exact path = "/" component = {WelcomePage} />
    <Route path="/signin" component = {SignIn}/>
    <Route path="/gallery" component = {App}/>
    <Route path="/all" component = {FindUser}/>
    <Route path="/edit/:id" component={UpdateUser} />
    <Route path="/profiles/:id" component={StandardProfile}/>
    <Route path="/createProfile" component={UserProfile}/>
    <Route path="/myProfiles" component={MyProfiles}/>
    <Route path="/viewProfile" component={viewProfile}/>
<<<<<<< HEAD
    
=======
    <Route path="/profileList" component={ProfileList}/>
>>>>>>> 9440177c561646314e9c971558e60d2e57af72b0
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));
