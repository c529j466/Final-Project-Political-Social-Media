// import React, { Component, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import Signin from "./pages/signin/signin";
import CandidateSignup from "./pages/canidate-signup/candidate-signup"
import VoterSignup from './pages/voter-signup/voter-signup';

function App() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
          <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/signin' element = {<Signin />}></Route>
                <Route path='/candidate-signup' element = {<CandidateSignup />}></Route>
                <Route path='/voter-signup' element = {<VoterSignup />}></Route>
          </Routes>
          </div>
          </div>
        </Router>
        
    );
}


export default App;