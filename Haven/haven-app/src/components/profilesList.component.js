import React, { Component } from 'react';

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import "../css/myprofile.css"
import * as jwt_decode from 'jwt-decode';

const Profile = props => (

<div className="card-deck" style={{margin: '10px'}}>
  <div>
    {/* Card */}
    <div className="card mb-4" id="card">
      {/* Card image */}
      <div className="view view-cascade overlay">
        <div id="crop">
          <img className="card-img-top" id="img" src={"http://localhost:5000/" + props.profile.profileImage1} alt="Card image cap" />
        </div>
        <a><div className="mask rgba-white-slight"/></a></div>

        <div className="card-body card-body-cascade text-center" id="cardContent">
          {/* Title */}

            <h4 className="card-title"><strong>{props.profile.display_name}</strong></h4>

          {/* Subtitle */}
          <div id="cardSubtitle">
            <h7><strong>{props.profile.user_type}</strong></h7>
          </div>
          {/* Text */}

            <div id="cardText">{props.profile.genre} </div>

            <div id="social">
              {/* Facebook */}
              <span>
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a></span>
              {/* Twitter */}
              <span>
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a></span>
              {/* Google + */}
              <span>
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a></span>
            </div>
            <div id="button">
              <button type="button" class="btn btn-outline-primary waves-effect">
              <Link to={"/profiles/"+props.profile._id}>View Profile</Link>
              </button>
            </div>


        </div>

        <div className="card-footer text-muted text-center">
        {props.profile.location}
        </div>

      </div>
    </div>
</div>
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
      <div className="card-deck" style={{margin: '10px'}}>
        {this.ProfileList()}
      </div>
    )
  }
}
