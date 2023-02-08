import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/navbar/logo.svg';
import appstoreBadge from '../../assets/images/footer/appstore-badge.png';
import playstoreBadge from '../../assets/images/footer/playstore-badge.png';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="container footer">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="footer__left col-xl-3">
                        <Link className="d-flex align-items-center" to="/"><img src={logo} alt="edushare" /></Link>
                        <p className="text-muted">Our motto to fulfill customer demand by making them satisfied with growing their business.</p>
                    </div>

                    <div className="footer__right col-xl-2 offset-1">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__right col-xl-2 offset-1">
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Support Center</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p-0" to="/">Accessibility</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__right col-xl-2 offset-1">
                        <h5>Get Our App</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <img alt="playstore" src={playstoreBadge}/>
                            </li>
                            <li className="nav-item">
                                <img alt="appstore" src={appstoreBadge}/>
                            </li>
                        </ul>
                    </div>
                </footer>
                <div className="border-top footer__copyright">
                    <p className="footer__copyright--text">Copyright Besnik 2021 All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;