import React from 'react';
import { Link } from "react-router-dom";
import "../stylesheets/NavigationBar.css";


export default function NavigationBar() {
  //console.log("rendering NavigationBar");
  return (
    <nav className="navbar">
      <div className="navbar-logo">VILO</div>
      <div className="navbar-tabs">
        <Link to="/home" className="navbar-tab">Home</Link>
        <Link to="/profile" className="navbar-tab">Profile</Link>
        <Link to="/courses" className="navbar-tab">Courses</Link>
        <Link to="/notes" className="navbar-tab">Notes</Link>
        <Link to="/my-courses" className="navbar-tab">My Courses</Link>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="navbar-search" />
        <Link to="/login" className="navbar-login">Login</Link>
      </div>
    </nav>
  );
};