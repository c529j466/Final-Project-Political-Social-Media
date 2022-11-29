// import React, { Component, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import Signin from "./pages/signin/signin";
import CandidateSignup from "./pages/canidate-signup/candidate-signup"
import PoliProfile from './pages/politicianProfile/politican';
import Search from './pages/SearchPage/searchPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/candidate-signup' element={<CandidateSignup />}></Route>
            <Route path='/voter-signup' element={<VoterSignup />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/UserProfile/:username' element={<UserProfile />}></Route>
            <Route path='/PoliProfile/:username' element={<PoliProfile />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}


export default App;
