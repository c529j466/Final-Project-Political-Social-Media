import "./navbar.css";
import { Link } from "react-router-dom";
import React from 'react';


function Navbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">PoliticalConnect</span>
        </Link>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink"><button>Home</button></Link>
          <span className="topbarLink">Search</span>
          <span className="topbarLink">Profile</span>
        </div>
        <div className="topbarLeft">
          <span className="topbarLink">Login/Signup</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;