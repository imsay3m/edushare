import React from 'react';
import './navbar.scss';
import logo from '../../assets/images/navbar/logo.svg';

function Navbar() {
    return (
        <>

            <nav className="navbar container navbar-expand-lg">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar__list" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <button className="btn" type="button">Sign In</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;