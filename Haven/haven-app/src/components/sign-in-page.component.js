import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signin.css"
import HavenLogo from "../images/haven-logo.png";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v3.8.5" />
        <title>Signin Template · Bootstrap</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/" />
        {/* Bootstrap core CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* Custom styles for this template */}
        <link href="signin.css" rel="stylesheet" />
        <form className="form-signin">
          <img className="mb-4" src= {HavenLogo} alt="" height={72} />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
        </form>
      </div>
    )
  }
}
