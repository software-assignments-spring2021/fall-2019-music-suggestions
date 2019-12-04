import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Material Design Bootstrap</title>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        {/* Bootstrap core CSS */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Material Design Bootstrap */}
        <link href="css/mdb.min.css" rel="stylesheet" />
        {/* Your custom styles (optional) */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Start your project here*/}
        {/*Navbar*/}
        <nav className="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">
          {/* Navbar brand */}
          <a className="navbar-brand" href="#">Haven</a>
          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In</a>
              </li>
              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Photographers</a>
                  <a className="dropdown-item" href="#">Musicians</a>
                  <a className="dropdown-item" href="#">More</a>
                </div>
              </li>
            </ul>
            {/* Links */}
            {/* Search form */}
            <form className="form-inline">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          {/* Collapsible content */}
        </nav>
        {/*/.Navbar*/}
        {/* Card deck */}
        <div className="card-deck" style={{margin: '10px'}}>
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="leena.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Leena Loo</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Photographer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="jimmy.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Jimmy Lin</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Dancer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="soo.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Soo Spitz</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Painter</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Card deck */}
        {/* Card deck */}
        <div className="card-deck" style={{margin: '10px'}}>
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="miles.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Miles Grossenbacher</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Musician</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Billy Coleman</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card mb-4">
            {/* Card image */}
            <div className="view view-cascade overlay">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body card-body-cascade text-center">
              {/* Title */}
              <h4 className="card-title"><strong>Billy Coleman</strong></h4>
              {/* Subtitle */}
              <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
              {/* Text */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
              </p>
              {/* Facebook */}
              <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter" /></a>
              {/* Google + */}
              <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble" /></a>
            </div>
            {/* Card footer */}
            <div className="card-footer text-muted text-center">
              2 days ago
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Card deck */}
        {/* Start your project here*/}
        {/* SCRIPTS */}
        {/* JQuery */}
        {/* Bootstrap tooltips */}
        {/* Bootstrap core JavaScript */}
        {/* MDB core JavaScript */}
      </div>
    );
  }
}
