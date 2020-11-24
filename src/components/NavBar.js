import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav className = "nav-wrapper red accent-4">
            <div className = "container">
                <a  className ="left brand-logo">Delicioso'</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to = '/'>Home</NavLink></li>
                    <li><NavLink to = "/about">About</NavLink></li>
                    <li><NavLink to = "/menu">Menu</NavLink></li>
                    <li><NavLink to = "/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default NavBar;