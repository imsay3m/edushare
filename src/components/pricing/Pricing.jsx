import React from 'react';
import './pricing.scss';

function Pricing() {
    return (
        <>
            <div className="container pricing">
                <div className="d-flex justify-content-between align-items-center pricing__header">
                    <h2 className="education__heading">Transform your life through education</h2>
                    <button className='btn upgrade__btn' type='button'>Upgrade now</button>
                </div>
                <div className="plan row justify-content-center">
                    <div className="plan__item col-xl-3">
                        <div className='plan__type'>
                            <h4>Regular</h4>
                        </div>
                        <h3 className='plan__amount'><sup>$</sup>65</h3>
                        <div className="plan__info">
                            <ul>
                                <li>1 Day Event</li>
                                <li>1 Speaker</li>
                                <li>Interaction Sessions</li>
                                <li>35 Classes</li>
                            </ul>
                        </div>
                        <button className='btn plan__btn' type='button'>Buy Plan</button>
                    </div>
                    <div className="plan__item medium__plan--bg col-xl-3">
                        <div className='plan__type medium__type--bg'>
                            <h4>Medium</h4>
                        </div>
                        <h3 className='plan__amount'><sup>$</sup>95</h3>
                        <div className="plan__info medium__plan__info">
                            <ul>
                                <li>1 Day Event</li>
                                <li>1 Speaker</li>
                                <li>Interaction Sessions</li>
                                <li>65 Classes</li>
                            </ul>
                        </div>
                        <button className='btn plan__btn medium__plan__btn' type='button'>Buy Plan</button>
                    </div>
                    <div className="plan__item premium__plan--bg col-xl-3">
                        <div className='plan__type premium__type--bg'>
                            <h4>Premium</h4>
                        </div>
                        <h3 className='plan__amount'><sup>$</sup>445</h3>
                        <div className="plan__info premium__plan__info">
                            <ul>
                                <li>1 Day Event</li>
                                <li>1 Speaker</li>
                                <li>Interaction Sessions</li>
                                <li>95 Classes</li>
                            </ul>
                        </div>
                        <button className='btn plan__btn premium__plan__btn' type='button'>Buy Plan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;