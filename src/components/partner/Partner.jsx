import React from 'react';
import './partner.scss';
import mcgill from '../../assets/images/partner/mcgill.svg';
import amity from '../../assets/images/partner/amity.svg';
import houston from '../../assets/images/partner/houston.svg';
import plymouth from '../../assets/images/partner/plymouth.svg';

function Partner() {
    return (
        <>
            <div className='partner container'>
                <div className="row align-items-center ">
                    <div className="col-xl-3 partner__left">
                        <h2 className='partner__count'>400+</h2>
                        <p className='partner__text'>Universities worldwide that partner with us</p>
                    </div>
                    <div className="col-xl-9  partner__right d-flex justify-content-between">
                        <img className='img-fluid' src={mcgill} alt="mcgill" />
                        <img className='img-fluid' src={amity} alt="amity" />
                        <img className='img-fluid' src={houston} alt="houston" />
                        <img className='img-fluid' src={plymouth} alt="plymouth" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner;