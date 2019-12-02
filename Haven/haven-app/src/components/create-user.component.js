import React, { Component } from 'react';
import axios from 'axios';
import "../css/create-user.css"


export default class CreateUser extends Component {
  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      username: '',
      password: '',
      user_type: '',
      genre: ''
    }
  }

//text box input setting for email
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  //text box input setting for username
  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

//text box input setting for password
  onChangePassword(e){
    this.setState({
      password: e.target.value
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



onSubmit(e){
  e.preventDefault();


  const user = {
    email: this.state.email,
    username: this.state.username,
    password: this.state.password,
    user_type: this.state.user_type,
    genre: this.state.genre
  }

  console.log(user);

  //window.location = '/';
  axios.post('http://localhost:5000/users/add', user)
  .then(res => console.log(res.data));

  this.setState({
    email: '',
    username:'',
    password: '',
    user_type:'',
    genre:''
  })
}

  render() {
    return (

      <div id="signin">
          <div>
              <h3>Create New User</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Email: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                  <label>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
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
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>

    )
  }
}
