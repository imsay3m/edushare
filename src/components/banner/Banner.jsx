import React from 'react';
import './banner.scss';
import bannerimage from '../../assets/images/banner/banner-right.png';

function Banner() {
    return (
        <>
            <div className="banner container">
                <div className="row">
                    <div className="banner__left col-xl-5">
                        <h1 className='banner__heading'>Discover best classes for the best  learning</h1>
                        <p className='banner__text'>We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.</p>
                        <button className='btn' type='button'>Get Started</button>
                        <p className='banner__text--small'>Not sure when to start?<a className='banner__link'>Learn more</a> </p>
                    </div>
                    <div className="banner__right col-xl-6 offset-xl-1">
                        <img className='img-fluid' src={bannerimage} alt="edushare" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;