import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.component";
import Browse from "./components/browse-artists.component";

//import WelcomePage from "./components/welcomepage.component";
//import SignIn from "./components/sign-in-page.component";
import CreateUser from "./components/create-user.component";
import UserProfile from './components/user-profile.component.js';
import Gallery from "./components/gallery.component.js";
import MyProfiles from "./components/myprofiles.component.js";

//import FindUser from "./components/find-user.component";
//import UpdateUser from "./components/update-user.component";
//import DeleteUser from "./components/delete-user.component";

function App() {
  return (


    <Router>
      <Navbar/>
      <br/>
      <Route path="/browse" exact component = {Browse} />
      <Route path="/gallery" component = {Gallery}/>
      <Route path="/createUser" component = {CreateUser}/>
      <Route path="/createProfile" component={UserProfile}/>
      <Route path="/myProfiles" component={MyProfiles}/>
    </Router>

  );
}

export default App;
