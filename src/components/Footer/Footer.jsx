import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/navbar/logo.svg';
import appstoreBadge from '../../assets/images/footer/appstore-badge.png';
import playstoreBadge from '../../assets/images/footer/playstore-badge.png';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                    <div className="col-xl-3 mb-3">
                        <Link className="d-flex align-items-center mb-3 link-dark text-decoration-none" to="/"><img src={logo} alt="edushare" /></Link>
                        <p className="text-muted">Our motto to fulfill customer demand by making them satisfied with growing their business.</p>
                    </div>

                    <div className="col-xl-2 offset-1 mb-3">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/about">About US</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Features</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">News</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Careers</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-1 mb-3 ">
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Account</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Support Center</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Feedback</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className="nav-link p-0 text-muted" to="/">Accessibility</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-1 mb-3">
                        <h5>Get Our App</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <img alt="playstore" src={playstoreBadge}/>
                            </li>
                            <li className="nav-item mb-2">
                                <img alt="appstore" src={appstoreBadge}/>
                            </li>
                        </ul>
                    </div>
                </footer>
                <div className="py-4 border-top">
                    <p>Copyright Besnik 2021 All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;