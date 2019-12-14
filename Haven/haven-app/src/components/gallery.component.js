import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Profile = props => (

<div className="card-deck" style={{margin: '10px'}}>
  <div>
    {/* Card */}
    <div className="card mb-4">
      {/* Card image */}
      <div className="view view-cascade overlay">
        <img className="card-img-top" src={"http://localhost:5000/" + props.profile.profileImage} alt="Card image cap" />
        <a><div className="mask rgba-white-slight"/></a>
      </div>
      <div className="card-body card-body-cascade text-center">
        {/* Title */}
        <h4 className="card-title"><strong>{props.profile.display_name}</strong></h4>
        {/* Subtitle */}
        <h6 className="font-weight-bold indigo-text py-2">{props.profile.user_type}</h6>
        {/* Text */}
        <p className="card-text">{props.profile.genre} </p>
        <p><Link to={"/profiles/"+props.profile._id}>View Profile</Link></p>

        {/* Facebook */}
        <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
        {/* Twitter */}
        <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
        {/* Google + */}
        <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
      </div>
      <div className="card-footer text-muted text-center">
        {props.profile.location}
      </div>
    </div>
    </div>
</div>
)


export default class Gallery extends Component {

  constructor(props) {
      super(props);

      this.state = {profiles: []};
    }

    componentDidMount() {
    axios.get('http://localhost:5000/profiles/')
      .then(response => {
        this.setState({ profiles: response.data })
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
          { this.ProfileList() }
        </div>

    );
  }
}
