import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/haven-logo.png';
import "../css/css_gallery/navbar.css"

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/browse" className="navbar-brand">
          <img className="haven-logo" src={ require('../images/haven-logo.png') } />
        </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/createUser" className="nav-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Something</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createProfile" className="nav-link">Create Profile</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
