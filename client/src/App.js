import React, { Component, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Topbar from './components/navbar/Topbar';
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import {
    BrowserRouter as Router,Routes,Route,Navigate,Switch} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}


export default App;