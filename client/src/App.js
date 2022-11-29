// import React, { Component, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import Signin from './pages/Login/login';
import Register from './pages/Register/Register'
import Politician from './pages/politicianProfile/politican';
import Search from './pages/SearchPage/searchPage';


// ReactDOM.render(document.body)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/Politician' element={<Politician />}></Route>
            {/* :username */}
          </Routes>
        </div>
      </div>
    </Router>

  );
}


export default App;
