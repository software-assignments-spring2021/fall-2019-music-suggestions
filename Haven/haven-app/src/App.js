import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.component";
import Browse from "./components/browse-artists.component";
import BrowsePhotography from "./components/browse-photography.component";
//import WelcomePage from "./components/welcomepage.component";
//import SignIn from "./components/sign-in-page.component";
//import CreateUser from "./components/create-user.component";
//import FindUser from "./components/find-user.component";
//import UpdateUser from "./components/update-user.component";
//import DeleteUser from "./components/delete-user.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/browse" exact component = {Browse} />
      <Route path="/browse/photography" component = {BrowsePhotography} />
    </Router>

  );
}

export default App;
