import React, { Component } from 'react';

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "../css/myprofile.css"
export default class MyProfiles extends Component {
  render() {
    return (
      <div id="wholesection">
      <div className="main-body">
          <h2 className="No-profile-text"> You currently have no profiles.<br/> Set one up now:</h2>
          <Link to= "/createProfile">
            <button className="button" type = "button">
              Create Profile
            </button>
          </Link>

      </div>
      </div>
    )
  }
}
