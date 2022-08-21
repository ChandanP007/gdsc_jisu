
import React, {useState} from 'react';

function Navbar() {
  
  return (
    <>
      <div id="navbar">
        <div className="logo">
          <h1>GDSC</h1><h2> JISU</h2>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Contact us</a></li>
            {/* Light Switch  */}
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
            </label>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar