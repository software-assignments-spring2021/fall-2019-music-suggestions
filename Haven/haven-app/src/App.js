import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.component";
import UserList from "./components/user-list.component";
import CreateUser from "./components/create-user.component";
import FindUser from "./components/find-user.component";
import UpdateUser from "./components/update-user.component";
import DeleteUser from "./components/delete-user.component";

function App() {
  return (
    <Router>
    <div className="App">
    Welcome to the Haven.
    </div>
    <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/add" component={CreateUser} />
      <Route path="/:id" component={FindUser} />
      <Route path="/update/:id" component={UpdateUser} />
      <Route path="/delete" component={DeleteUser} />
    </div>
    </Router>
  );
}

export default App;
