import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/haven-logo.png';
import "../css/css_gallery/navbar.css"

export default class Navbar extends Component {

  render() {
    const user = false;

    return (

      <div id="nav">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Material Design Bootstrap</title>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        {/* Bootstrap core CSS */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Material Design Bootstrap */}
        <link href="css/mdb.min.css" rel="stylesheet" />
        {/* Your custom styles (optional) */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Start your project here*/}

        {/*Navbar*/}

        <nav className="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">
          {/* Navbar brand */}
          <Link to="/browse"><img className="haven-logo" src={ require('../images/haven-logo.png') } /></Link>
          {/* <a className="navbar-brand" href="#">Haven</a> */}
          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/gallery" className="nav-link" id="text">Explore</Link>
              </li>

              <li className="nav-item active">
              <Link to="/createUser" className="nav-link" id="text">Create Account</Link>
              </li>

              <li className="nav-item active">
              <Link to="/signin" className="nav-link" id="text">Sign In</Link>
              </li>
              {/* Dropdown
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Photographers</a>
                  <a className="dropdown-item" href="#">Musicians</a>
                  <a className="dropdown-item" href="#">More</a>
                </div>
              </li>*/}
            </ul>
            {/* Links */}
            {/* Search form */}
            <form className="form-inline">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          {/* Collapsible content */}
        </nav>
        {/*/.Navbar*/}
        </div>
    );
  }
}
