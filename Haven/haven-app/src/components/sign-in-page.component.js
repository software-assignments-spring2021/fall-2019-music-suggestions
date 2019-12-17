import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signin.css"
import HavenLogo from "../images/haven-logo.png";
import axios from 'axios';

export default class SignIn extends Component {
  constructor(props){
    super(props);


    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      success:false
    }
  }

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

    const signin = {

      username: this.state.username,
      password: this.state.password

    }
    console.log(signin);

    axios.post('http://localhost:5000/users/login', signin)
    .then(res => {
      localStorage.setItem('usertoken', res.data.token);
      //console.log(res.data.token);
      console.log(localStorage.usertoken);
      window.location = "/gallery";
    });

    this.setState({
      username:'',
      password: '',
      success: true
    })

  }


  render() {
    return (
      <div className="signin-body" id="section3">
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
        <link href="signin.css" rel="stylesheet" />


        <div id="content">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <img className="mb-4" src= {HavenLogo} alt="" height={72} />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="text" id="inputUsername" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} required/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} required />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
          </form>
        </div>
        </div>
    )
  }
}
