import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Haven App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">User List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Create New User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/:id" className="nav-link">Find User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/update/:id" className="nav-link">Update User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/delete" className="nav-link">Delete User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
