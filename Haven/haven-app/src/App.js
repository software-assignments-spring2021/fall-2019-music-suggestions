import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.component";
//import CreateUser from "./components/create-user.component";
//import FindUser from "./components/find-user.component";
//import UpdateUser from "./components/update-user.component";
//import DeleteUser from "./components/delete-user.component";

function App() {
  return (

    <div>
      <Navbar/>
    </div>
  );
}

export default App;
