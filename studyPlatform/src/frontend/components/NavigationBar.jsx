import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "../stylesheets/NavigationBar.css";
import { useAuth0 } from '@auth0/auth0-react';


export default function NavigationBar() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  //console.log("rendering NavigationBar");
  console.log('isAuthenticated:', isAuthenticated);
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
        {isAuthenticated ? <Button onClick={() => logout()}>Log Out</Button> : <Button onClick={loginWithRedirect}>Log In</Button>}

      </div>
    </nav>
  );
};