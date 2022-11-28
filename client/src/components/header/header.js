import React from 'react';
import PCimg from './images/PCimg.jpg'

function Header() {
  return (
    <div>
        <header>
            <img src= {PCimg} alt="logo"></img>
            <h3>Political Connect</h3>
        </header>
    </div>
  );
};

export default Header;