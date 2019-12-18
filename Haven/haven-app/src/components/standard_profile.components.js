import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/view-profile.css"
import leena from "../images/leena.jpg";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";

export default class StandardProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      user_type: '',
      genre: '',
      description: '',
      location: '',
      website_url: '',
      facebook_url: '',
      instagram_url: '',
      profileImage:'',
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/profiles/'+this.props.match.params.id)
    .then (response => {
      this.setState({
        display_name: response.data.display_name,
        user_type: response.data.user_type,
        genre: response.data.genre,
        description: response.data.description,
        location: response.data.location,
        website_url: response.data.website_url,
        facebook_url: response.data.facebook_url,
        instagram_url: response.data.instagram_url,
        profileImage1: response.data.profileImage1,
        profileImage2: response.data.profileImage2,
        profileImage3: response.data.profileImage3,
        profileImage4: response.data.profileImage4
      })
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })

    axios.get('http://localhost:5000/profiles/')
      .then(response =>{
        if (response.data.length > 0){
          this.setState({
            profiles: response.data.map(profile => profile.display_name)
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="allProfile">
        {/* Card deck */}
        <div>
          {/* Card */}
          <div>
            {/* Card image */}
            <div id="propic">
              <img className="profilePic" src={"http://localhost:5000/" + this.state.profileImage1} />
            </div>
            {/* Card content */}
            <div className="textProfile">
              {/* Title - Display Name*/}
              <h4><strong>{this.state.display_name}</strong></h4>
              {/* Subtitle - Genre*/}
              <h6>{this.state.genre}</h6>
              {/* Text - Description*/}
              <p className= "descriptionText">{this.state.description}</p>
              {/* Facebook */}
              <a type="button" className="socials" href={this.state.facebook_url}><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="socials" href={this.state.instagram_url}><i className="fab fa-instagram" /></a>
              {/* Google + */}
              <a type="button" className="socials" href={this.state.website_url}><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
          </div>
          {/* Card */}
          <div className = "workContainer">
            <img className="workPic" src={"http://localhost:5000/" + this.state.profileImage2} />
            <img className="workPic" src={"http://localhost:5000/" + this.state.profileImage3} />
            <img className="workPic" src={"http://localhost:5000/" + this.state.profileImage4} />
          </div>
        </div>
        {/* Card deck */}
        </div>
    )
  }
}
