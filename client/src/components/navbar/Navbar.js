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
          <Link to="/" className="topbarLink"><button className="nav-link" >Home</button></Link>
          <Link to="/Search" className="topbarLink"><button className="nav-link" >Search</button></Link>
          <Link to="/politician" className="topbarLink"><button className="nav-link" >Profile</button></Link>
        </div>
        <div className="topbarLeft">
          <Link to="/Signin" className="topbarLink"><button className="nav-link">Signin</button></Link>
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