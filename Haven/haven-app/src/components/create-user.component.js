import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/create-user.css"
import HavenLogo from "../images/haven-logo.png";
import axios from 'axios';



class NewUserFactory {
  constructor (username, userType){
    this.createUser = function(userType){
      let user;
      if (userType == 'Artist'){
        user = new Artist(username);
      }
      else if(userType == 'Buyer'){
        user = new Buyer(username);
      }
      user.type = function(){
        return 'The user is a ${this._type} ';
      }
    }
  }
}

class Artist extends NewUserFactory{
  constructor(username){
    this._type = 'Artist';
    this.username  = username;
  }
  addDescription(description){
    this.description = description;
  }
  addSkills(skills){
    this.skills = skills;
  }
}

class Buyer{
  constructor(username){
    this._type = 'Buyer';
    this.username  = username;
  }
}


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
      <div className="createuser-body" id="section3">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v3.8.5" />
        <title>Signin Template · Bootstrap</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/" />
        {/* Bootstrap core CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* Custom styles for this template */}
        <link href="create-user.css" rel="stylesheet" />


        <div id="content">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <img className="mb-4" src= {HavenLogo} alt="" height={72} />
            <h1 className="h3 mb-3 font-weight-normal">Create New Account</h1>
            <label htmlFor="inputUsername" className="sr-only">Email:</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required/>
            <label htmlFor="inputPassword" className="sr-only">Username:</label>
            <input type="text" id="inputUsername" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} required />
            <label htmlFor="inputPassword" className="sr-only">Password:</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} required/>

            <br/>
            <button className="btn btn-lg btn-primary btn-block" type="submit" value="Create User">Create Account</button>

          </form>
        </div>
        </div>




    )
  }
}
