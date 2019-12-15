import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
       
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/admin/" className="nav-link text-light" >News</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/create" className="nav-link text-light">Create News</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/user" className="nav-link text-light">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}