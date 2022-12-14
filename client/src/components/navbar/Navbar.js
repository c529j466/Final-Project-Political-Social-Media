import "./navbar.css";
import { Link } from "react-router-dom";
import React from 'react';


export default function Navbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">PoliticalConnect</span>
        </Link>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Search</span>
          <span className="topbarLink">Profile</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          </div>
        </div>
      </div>
    </div>
  );
}