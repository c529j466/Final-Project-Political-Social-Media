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

export default App;