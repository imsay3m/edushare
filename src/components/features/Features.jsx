import React from 'react';
import './features.scss';
import lectureVideo from '../../assets/images/features/features-right.png';
import lectureOne from '../../assets/images/features/lecture-1.png';
import lectureVTwo from '../../assets/images/features/lecture-2.png';
import lectureThree from '../../assets/images/features/lecture-3.png';


function Features() {
    return (
        <>
            <div className="container features">
                <div className="row">
                    <div className="col-xl-5 features__left">
                        <h2 className='features__heading'>Transform your life through education</h2>
                        <p className='features__text'>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
                        <button type='button' className='btn features__btn'>Get Started</button>
                    </div>
                    <div className="col-xl-6 offset-xl-1 features__right">
                        <div className="lecture__video">
                            <img className='lecture__img' src={lectureVideo} alt="" />
                            <div className="play__icon">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Features;