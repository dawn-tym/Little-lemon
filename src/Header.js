import React from "react";
import logo from "./images/Logo .jpg";

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" width={200} height={49} />
            <nav> 
                <ul className="list">
                    <li className="item"><a href="/Home">Home</a></li>
                    <li className="item"><a href="/About">About</a></li>
                    <li className="item"><a href="/Menu">Menu</a></li>
                    <li className="item"><a href="/Reservations">Reservations</a></li>
                    <li className="item"><a href="/Online order">Online order</a></li>
                    <li className="item"><a href="/Login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
