import React from 'react';
import { Link } from "react-router-dom";
import "../stylesheets/NavigationBar.css";


export default function NavigationBar() {
  //console.log("rendering NavigationBar");
  return (
    <nav className="navbar">
      <div className="navbar-logo">VILO</div>
      <div className="navbar-tabs">
        {/*<Link to="/home" className="navbar-tab">Home</Link> This does not work for some reason but would be better in any case. Fix it */}
        <a href="/home" className="navbar-tab">Home</a>
        <a href="/profile" className="navbar-tab">Profile</a>
        <a href="/courses" className="navbar-tab">Courses</a>
        <a href="/notes" className="navbar-tab">Notes</a>
        <a href="/my-courses" className="navbar-tab">My Courses</a>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="navbar-search"/>
        <button className="navbar-login">Login</button>
      </div>
    </nav>
  );
};