import React from "react";
import logo from "./images/Logo .jpg";
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" width={200} height={49} />
            <nav> 
                <ul className="list">
                    <li className="item"><Link to="/Home">Home</Link></li>
                    <li className="item"><Link to="/About">About</Link></li>
                    <li className="item"><Link to="/Menu">Menu</Link></li>
                    <li className="item"><Link to="/Reservations">Reservations</Link></li>
                    <li className="item"><Link to="/Online-order">Online order</Link></li>
                    <li className="item"><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
