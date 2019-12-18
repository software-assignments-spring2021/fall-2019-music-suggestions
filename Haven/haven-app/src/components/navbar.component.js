import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../images/haven-logo.png';
import "../css/css_gallery/navbar.css"

class Navbar extends Component {

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('gallery');
  }

  render() {

    const userlink = (
      <div id="right">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/createProfile" className="nav-link" id="text">Create Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/myProfiles" className="nav-link" id="text">My Profiles</Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} id="text" className="nav-link">
          Log Out
          </a>
        </li>

      </ul>
      </div>

    )

    const loginRegisterLink = (
      <div id="right">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link to="/createUser" className="nav-link" id="text">Create Account</Link>
        </li>
        <li className="nav-item active">
        <Link to="/signin" className="nav-link" id="text">Sign In</Link>
        </li>
      </ul>
      </div>

    )

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
          <Link to="/gallery"><img className="haven-logo" src={ require('../images/haven-logo.png') } /></Link>
          {/* <a className="navbar-brand" href="#">Haven</a> */}
          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/gallery" className="nav-link" id="text"></Link>
              </li>
            </ul>


            {localStorage.usertoken ? userlink : loginRegisterLink}


          </div>
          {/* Collapsible content */}
        </nav>
        {/*/.Navbar*/}
        </div>
    );
  }
}

export default withRouter(Navbar)
