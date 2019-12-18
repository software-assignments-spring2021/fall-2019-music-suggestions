import React, { Component } from 'react';

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import "../css/myprofile.css"
import * as jwt_decode from 'jwt-decode';

const Profile = props => (
  <tr>
    <td>{props.profile.user_id}</td>
    <td>{props.profile.user_type}</td>
    <td>{props.profile.display_name}</td>
    <td>{props.profile.genre}</td>
  </tr>
)


export default class profilesList extends Component {
  constructor(props){
    super(props);
    this.state = {profiles: []};
  }

  componentDidMount(){

    var token = localStorage.usertoken;
    var decoded = jwt_decode(token);
    console.log(decoded.userId);
    axios.get('http://localhost:5000/profiles/myprofiles/'+decoded.userId)
      .then(response => {
        console.log(response.data);
        console.log("first one is: ");
        console.log(response.data[0]);
        this.setState({profiles: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  ProfileList() {
    return this.state.profiles.map(currentProfile => {
      return <Profile profile={currentProfile} key={currentProfile._id}/>;
    })
  }


  render() {
    return (
      <div>
        {this.ProfileList()}
      </div>
    )
  }
}
