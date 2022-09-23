import React from 'react';
import { Link } from 'react-router-dom';

import "./NavComponent.css";

const NavComponent = () => {
    const toggleLogin = () => {
        const loginPanel = document.querySelector(".login-panel");
        loginPanel.classList.toggle("active");
    }
    return (
        <div className="navbar">
            <div className="brand">
                <Link to="/" className="free-link">
                ALUMINI <span className="brand-yellow">CONNECT</span>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="#" className="free-link nav-link">NEWS</Link>
                <Link to="/events" className="free-link nav-link">EVENTS</Link>
                <Link to="/aboutus" className="free-link nav-link">ABOUT US</Link>
                <Link to="/contactus" className="free-link nav-link">CONTACT US</Link>
            </div>
            <div className="nav-auth">
                <Link to="#" onClick={toggleLogin} className="free-link nav-link-auth">Login</Link>
                <div className="login-panel">
                    <div>
                        <Link className="login-panel-link" to="/login/student">Student Login</Link>
                    </div>
                    <div>
                        <Link className="login-panel-link" to="/login/alumini">Alumini Login</Link>
                    </div>
                    <div>
                        <Link className="login-panel-link" to="/login/msde">Msde Login</Link>
                    </div>
                </div>             
            </div>
        </div>
    );
};

export default NavComponent;
