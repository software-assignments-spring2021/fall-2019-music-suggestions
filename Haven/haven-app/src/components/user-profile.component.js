import React, { Component } from 'react';
import axios from 'axios';
import "../css/create-user.css"

export default class UserProfile extends Component {
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDisplay_name = this.onChangeDisplay_name.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWebsite_url = this.onChangeWebsite_url.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      display_name: '',
      user_type: '',
      genre: '',
      description: '',
      location: '',
      website_url: ''
    }
  }


  //text box input setting for username
  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onChangeDisplay_name(e){
    this.setState({
      display_name: e.target.value
    })
  }

  onChangeUserType(e){
    this.setState({
      user_type: e.target.value
    })
  }

  onChangeGenre(e){
    this.setState({
      genre: e.target.value
    })
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  onChangeLocation(e){
    this.setState({
      location: e.target.value
    })
  }

  onChangeWebsite_url(e){
    this.setState({
      website_url: e.target.value
    })
  }


onSubmit(e){
  e.preventDefault();


  const user = {
    username: this.state.username,
    display_name: this.state.display_name,
    user_type: this.state.user_type,
    genre: this.state.genre,
    description: this.state.description,
    location: this.state.location,
    website_url: this.state.website_url
  }

  console.log(user);

  //window.location = '/';
  axios.post('http://localhost:5000/profile/add', user)
  .then(res => console.log(res.data));

  this.setState({
    username: '',
    display_name: '',
    user_type: '',
    genre: '',
    description: '',
    location: '',
    website_url: ''
  })
}

  render() {
    return (

      <div id="signin">
          <div>
              <h3 className="create-profile-text">Create New Profile</h3>
              <form onSubmit={this.onSubmit}>
              {/*
                <div className="form-group">
                  <label>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      />
                </div>*/}
                <div className="form-group">
                  <label>Display Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.display_name}
                      onChange={this.onChangeDisplay_name}
                      />
                </div>
                {/*// SWITCHED TO BUTTON!!!!!*/}
                <div className="form-group">
                  <label>User Type: </label>
                  <select type="text"
                      required
                      className="form-control"
                      value={this.state.user_type}
                      onChange={this.onChangeUserType}>

                    <option value="consumer">Consumer</option>
                    <option value="serviceprovider">Service Provider</option>

                  </select>
                </div>
                {/* SWITCHED TO BUTTON!!!!!*/}
                <div className="form-group">
                  <label>Genre Type: </label>
                  <select type="text"
                      required
                      className="form-control"
                      value={this.state.genre}
                      onChange={this.onChangeGenre}>
                    <option value="photographer">Photographer</option>
                    <option value="musician">Musician</option>
                    <option value="cook">Cook</option>
                    <option value="dancer">Dancer</option>
                    <option value="dj">DJ</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                  <label>City: </label>
                  <select type="text"
                      required
                      className="form-control"
                      value={this.state.location}
                      onChange={this.onChangeLocation}>
                    <option value="New York, NY">New York, NY</option>
                    <option value="Chicago, IL">Chicago, IL</option>
                    <option value="Los Angeles, CA">Los Angeles, CA</option>
                    <option value="Washington, DC">Washington, DC</option>
                    <option value="Seattle, WA">Seattle, WA</option>
                    <option value="Austin, TX">Austin, TX</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Website: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.website_url}
                      onChange={this.onChangeWebsite_url}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>

    )
  }
}
