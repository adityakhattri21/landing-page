import React from 'react'
import logo from "./logo.png"
import { FaChevronDown } from "react-icons/fa"
import './main.css'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                   <img src={logo} alt="logo"/>
                  <div className="logo-text">
                   <a>Point Blank</a>
                   </div>
                    <button type="button" className="toggle-btn"
                    // onClick={toggleSidebar}
                    >
                     <FaChevronDown />
                    </button>
                </div>
               <ul className="page-links nav-links">
                {/* <li ><a href="#">Home </a></li> */}
                <li ><a href="#team">Teams </a></li>
                <li ><a href="#event">Events </a></li>
                <li ><a href="#about">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
