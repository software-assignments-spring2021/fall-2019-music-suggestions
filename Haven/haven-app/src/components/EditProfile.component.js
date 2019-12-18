import React, { Component } from 'react';
import axios from 'axios';
import "../css/edit-profile.css"
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);
    this.onChangeFacebook_url = this.onChangeFacebook_url.bind(this);
    this.onChangeInstagram_url = this.onChangeInstagram_url.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      display_name: '',
      user_type: '',
      genre: '',
      description: '',
      location: '',
      website_url: '',
      facebook_url: '',
      instagram_url: '',
      profiles: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/profiles/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          display_name: response.data.display_name,
          user_type: response.data.user_type,
          genre: response.data.genre,
          description: response.data.description,
          location: response.data.location,
          website_url: response.data.website_url,
          facebook_url: response.data.facebook_url,
          instagram_url: response.data.instagram_url,
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

  onChangeDisplayName(e) {
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
  onChangeURL(e){
    this.setState({
      website_url: e.target.value
    })
  }

  onChangeFacebook_url(e){
    this.setState({
      facebook_url: e.target.value
    })
  }

  onChangeInstagram_url(e){
    this.setState({
      instagram_url: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const profile = {
      display_name: this.state.display_name,
      user_type: this.state.user_type,
      genre: this.state.genre,
      description: this.state.description,
      location: this.state.location,
      website_url: this.state.website_url,
    }

    console.log(profile);

    axios.post('http://localhost:5000/myprofiles/edit/' + this.props.match.params.id, profile)
      .then(res => console.log(res.data));

    window.location = '/gallery';
  }

  render() {
    return (
    <div>
      <h3><strong>Edit User Log</strong></h3>
      <div id="editprofile">
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Display Name: </label>
            <input type="text"
              required
              className="form-control"
              value= {this.state.display_name}
              onChange={this.onChangeDisplayName}
            />
        </div>
        <div className="form-group">
          <label>User Type: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.user_type}
                onChange={this.onChangeUserType}
              />
        </div>
        <div className="form-group">
          <label>Genre: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.genre}
                onChange={this.onChangeGenre}
              />
        </div>
        <div className="form-group">
          <label>Description: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Location: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Personal Website Link: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.website_url}
                onChange={this.onChangeURL}
              />
        </div>
        <div className="form-group">
          <label>Facebook Link: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.facebook_url}
                onChange={this.onChangeFacebook_url}
              />
        </div>
        <div className="form-group">
          <label>Instagram Link: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.instagram_url}
                onChange={this.onChangeInstagram_url}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit User Data" className="btn btn-primary" />
        </div>
      </form>
      </div>
    </div>
    )
  }
}
