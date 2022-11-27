<<<<<<< HEAD
import React, { Component, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/navbar/Topbar';
import Home from "./pages/home/Home";
import Login from "./pages/signin/signin";
import Profile from "./pages/profile/Profile";
import Register from "./pages/signup/signup";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
    // state = {
    //     data: null
    // };
    // componentDidMount() {
    //     this.callBackendAPI()
    //         .then(res => this.setState({ data: res.express }))
    //         .catch(err => console.log(err));
    // }
    // // fetching the GET route from the Express server which matches the GET route from server.js
    // callBackendAPI = async () => {
    //     const response = await fetch('/express_backend');
    //     const body = await response.json();

    //     if (response.status !== 200) {
    //         throw Error(body.message)
    //     }
    //     return body;
    // };
    const { user } = useContext(AuthContext);

    // render() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"></Route>
                {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route> */}
                <Route path="/register" element={<Register />}></Route>
                {/* <Route path="/profile/:username" element={<Profile />}></Route> */}
            </Routes>
            {/* <p className="App-intro">{this.state.data}</p> */}
        </Router>
    );
    //}
}
=======
import React from 'react';
import Home from "./components/pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
      return (
        <div className="Social-app">
         <Navbar/>
          <Home />
        </div>
      );
    };
>>>>>>> c2f4d0e6fef9a405ee3e61ccc651f6f9e2f5bf35

export default App;