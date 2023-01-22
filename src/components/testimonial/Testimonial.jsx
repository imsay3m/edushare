import React from 'react';
import './testimonial.scss';
import wilsonAvatar from '../../assets/images/testimonial/wilson-avatar.svg';
import milenaAvatar from '../../assets/images/testimonial/milena-avatar.svg';

function Testimonial() {
    return (
        <>
            <div className="container testimonial">
                <div className="row testimonial__top">
                    <div className="col-xl-5 top__left">
                        <h2 className='testimonial__heading'>Transform your life through education</h2>
                    </div>
                    <div className="col-xl-2 offset-xl-5 top__right">
                        <div className="slider__icon">
                            <i class="fa-solid fa-arrow-left"></i>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="row testimonial__bottom">
                    <div className="col-xl-5 testimonial__review">
                        <h5>“Love mathematics because of Besnik Academy”</h5>
                        <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>
                        <div className="testimonial__reviewer">
                            <img src={wilsonAvatar} alt="wilson" />
                            <div className="reviewer__text">
                                <h4>Wilson Thai</h4>
                                <p>Ontario, Canada</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-2 testimonial__review">
                        <h5>“There is so much to see and do all over world”</h5>
                        <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>
                        <div className="testimonial__reviewer">
                            <img src={milenaAvatar} alt="milena" />
                            <div className="reviewer__text">
                                <h4>Milena Belmar</h4>
                                <p>Argentina</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial