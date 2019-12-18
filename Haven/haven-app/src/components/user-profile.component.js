import React, { Component } from 'react';
import axios from 'axios';
import "../css/create-user.css"

export default class UserProfile extends Component {
  constructor(props){
    super(props);


    this.onChangeDisplay_name = this.onChangeDisplay_name.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWebsite_url = this.onChangeWebsite_url.bind(this);
    this.onChangeFacebook_url = this.onChangeFacebook_url.bind(this);
    this.onChangeInstagram_url = this.onChangeInstagram_url.bind(this);
    this.onChangeProfileImage = this.onChangeProfileImage.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      display_name: '',
      user_type: 'Consumer',
      genre: 'Photography',
      description: '',
      location: 'New York, NY',
      website_url: '',
      facebook_url: '',
      instagram_url: '',
      profileImage1: null,
      profileImage2: null,
      profileImage3: null,
      profileImage4: null
    }
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

  onChangeProfileImage(e){


    this.setState({

      profileImage1: e.target.files[0],
      profileImage2: e.target.files[1],
      profileImage3: e.target.files[2],
      profileImage4: e.target.files[3]
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
    website_url: this.state.website_url,
    facebook_url: this.state.facebook_url,
    instagram_url: this.state.instagram_url,
    profileImage1: this.state.profileImage1,
    profileImage2: this.state.profileImage2,
    profileImage3: this.state.profileImage3,
    profileImage4: this.state.profileImage4
  }


  console.log(profile);

  let formData = new FormData();    //formdata object

  const config = {
    headers: { 'content-type': 'multipart/form-data', 'authorization': localStorage.usertoken }
  }

  formData.append('display_name', this.state.display_name);   //append the values with key, value pair
  formData.append('user_type', this.state.user_type);
  formData.append('genre', this.state.genre);
  formData.append('description', this.state.description);
  formData.append('location', this.state.location);
  formData.append('website_url', this.state.website_url);
  formData.append('facebook_url', this.state.facebook_url);
  formData.append('instagram_url', this.state.instagram_url);
  formData.append('profileImage1', this.state.profileImage1);
  formData.append('profileImage2', this.state.profileImage2);
  formData.append('profileImage3', this.state.profileImage3);
  formData.append('profileImage4', this.state.profileImage4);

  axios.post('http://localhost:5000/profiles/add', formData, config)
  .then(res => {

    this.props.history.push('/gallery')
  });


  this.setState({
    display_name: '',
    user_type: 'Consumer',
    genre: 'Photography',
    description: '',
    location: 'New York, NY',
    website_url: '',
    facebook_url: '',
    instagram_url: '',
    profileImage1: null,
    profileImage2: null,
    profileImage3: null,
    profileImage4: null
  })

}

  render() {
    return (
      <div id="background">
      <div id="signin">
          <div>
              <h3 className="create-profile-text"><strong>Create New Profile</strong></h3>
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

                    <option value="Consumer">Consumer</option>
                    <option value="Service Provider">Service Provider</option>

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
                    <option value="Photography">Photography</option>
                    <option value="Music">Music</option>
                    <option value="Catering">Catering</option>
                    <option value="Dance">Dance</option>
                    <option value="DJ">DJ</option>
                    <option value="Other">Other</option>
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
                  <label>Personal Website: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.website_url}
                      onChange={this.onChangeWebsite_url}
                      />
                </div>
                <div className="form-group">
                  <label>Facebook Link: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.facebook_url}
                      onChange={this.onChangeFacebook_url}
                      />
                </div>
                <div className="form-group">
                  <label>Instagram Link: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.instagram_url}
                      onChange={this.onChangeInstagram_url}
                      />
                </div>

                <form className="md-form" action="#">
                  <div className="file-field">
                    <div>
                    <span>Choose files</span><br/>
                    <input type="file" multiple onChange={(e) => this.onChangeProfileImage(e)}/>
                    </div>
                    <div className="file-path-wrapper"><br/>
                    </div>
                    </div>
                    </form>

              <div/>
                <div className="form-group">
                  <input type="submit" value="Create Profile" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
          </div>

    )
  }
}
