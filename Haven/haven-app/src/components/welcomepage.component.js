import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/welcome-page-style.css"

import HavenLogo from "../images/haven-logo.png";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class UserList extends Component {
  render() {
    return (
      <div id="wholesection">
      <div className="main-body">
      <div className="main" id="section1">
          <img src= {HavenLogo} />
          <p>Welcome to the Haven.<br />
            Haven is your place to <br /> find local artists!<br />
            Get started now.</p><br />
          <br /><button className="button" onclick="window.location.href = '#section2';">See More
          </button></div>
        <div className="main" id="section2">
          <h2> Whether you are looking to <br /> hire a photographer for an event, <br />
            or you are trying to join a band, <br />
            Haven is the platform for you <br />to find and collaborate<br />
            with artists in your area.</h2>
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
