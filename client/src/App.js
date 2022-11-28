// import React, { Component, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Topbar from './components/navbar/Topbar';
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";

function App() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
          <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
          </div>
          </Router>
        
    );
}


export default App;