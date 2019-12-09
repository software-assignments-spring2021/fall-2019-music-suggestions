import React, { Component } from 'react';
import axios from 'axios';
import "../css/create-user.css"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class UserProfile extends Component {
  constructor(props){
    super(props);


    this.onChangeDisplay_name = this.onChangeDisplay_name.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWebsite_url = this.onChangeWebsite_url.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      display_name: '',
      user_type: '',
      genre: '',
      description: '',
      location: '',
      website_url: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/profiles/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          display_name: response.data.username,
          user_type: response.data.password,
          genre: response.data.genre,
          description: response.data.description,
          location: response.data.location,
          website_url: response.data.website_url
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/profiles/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            profiles: response.data.map(profile => profile.display_name),
          })
        }
      })
      .catch((error) => {
        console.log(error);
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


  const profile = {
    display_name: this.state.display_name,
    user_type: this.state.user_type,
    genre: this.state.genre,
    description: this.state.description,
    location: this.state.location,
    website_url: this.state.website_url
  }

  console.log(profile);


  axios.post('http://localhost:5000/profiles/update' + this.props.match.params.id, profile)
  .then(res => console.log(res.data));

    window.location = '/all';

  render() {
    return (

      <div id="signin">
          <div>
              <h3 className="create-profile-text">Edit Profile</h3>
              <form onSubmit={this.onSubmit}>

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
                <Link to= "/myProfiles">
                  <input type="submit" value="Save Changes" className="btn btn-primary"/>
                </Link>
                </div>
              </form>
            </div>
          </div>

    )
  }
}
