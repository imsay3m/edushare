import React from 'react';
import './navbar.scss';
import logo from '../../assets/images/navbar/logo.svg';
import {Link} from "react-router-dom";

function Navbar() {
    /*<a className="nav-link">Contact</a>*/
    return (
        <>

            <nav className="navbar container navbar-expand-lg">
                <Link className="nav-link" to="/"><img src={logo} alt="" /></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar__list" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button className="btn" type="button">Sign In</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;