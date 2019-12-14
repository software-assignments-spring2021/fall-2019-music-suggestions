import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/welcome-page-style.css"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import HavenLogo from "../images/haven-logo.png";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class UserList extends Component {
  render() {
    return (
      <div className="welcomeWhole" id="wholesection">
      <div className="main-body">
      <div className="main" id="section1">
          <img src= {HavenLogo} />
          <p className="HavenText-Welcome">Welcome to the Haven.<br />
            Haven is your place to <br /> find local artists!<br />
            Get started now.</p><br />


          <Link to= "/browse">
            <button className="button" type = "button">
              Explore Artists
            </button>
          </Link>
          <Link to= "/signin">
            <button className="button" onclick="window.location.href = 'index.html';">Create Account</button>
          </Link>

          {/*a href="#section1">Go back</a*/}
        </div>

      </div>

      </div>
    )
  }
}
