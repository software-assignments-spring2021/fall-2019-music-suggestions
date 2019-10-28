import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {
  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      username: '',
      password: ''
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

onSubmit(e){
  e.preventDefault();

  const user = {
    email: this.state.email,
    username: this.state.username,
    password: this.state.password
  }

  console.log(user);

  //window.location = '/';
  axios.post('http://localhost:5000/users/add', user)
  .then(res => console.log(res.data));

  this.setState({
    email: '',
    username:'',
    password: ''
  })
}

  render() {
    return (
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
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
            </div>
    )
  }
}

export sayHello: function(){
return 'hello';
}

/*
module.exports = {
  sayHello: function(){
  return 'hello';
  }
}
*/
