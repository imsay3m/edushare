import React from 'react';
import './hiw.scss';
import hiwLeft from '../../assets/images/hiw/hiw-left.png';
import learning from '../../assets/images/hiw/learning.png';
import education from '../../assets/images/hiw/education.png';
import curriculumn from '../../assets/images/hiw/curriculumn.png';
import social from '../../assets/images/hiw/social.png';

function Hwi() {
    return (
        <>
            <div className="container how-it-works">
                <div className="row">
                    <div className="col-xl-5 how-it-works__left">
                        <img className='img-fluid' src={hiwLeft} alt="how-it-works" />
                    </div>
                    <div className="col-xl-6 offset-xl-1 how-it-works__right">
                        <h2 className='hiw__text'>How Our Online Public School Works</h2>
                        <div className="row hiw__card">
                            <div className="col-xl-6 hiw__card--item">
                                <img className='hiw__card--img' src={learning} alt="learning" />
                                <h4 className='hiw__card--title'>Virtual Learning</h4>
                                <p className='hiw__card--text'>The only costs are for standard school supplies and voluntary field trips.</p>
                            </div>
                            <div className="col-xl-6 hiw__card--item">
                                <img className='hiw__card--img' src={education} alt="education" />
                                <h4 className='hiw__card--title'>Meaningful Education</h4>
                                <p className='hiw__card--text'>Many of our Connections Academy schools have additional accreditation.</p>
                            </div>
                        </div>
                        <div className="row hiw__card">
                            <div className="col-xl-6 hiw__card--item">
                                <img className='hiw__card--img' src={curriculumn} alt="curriculumn" />
                                <h4 className='hiw__card--title'>Online Curriculumn</h4>
                                <p className='hiw__card--text'>Our curriculum prepares students to go further in life by giving them support.</p>
                            </div>
                            <div className="col-xl-6 hiw__card--item">
                                <img className='hiw__card--img' src={social} alt="social" />
                                <h4 className='hiw__card--title'>Social Interection</h4>
                                <p className='hiw__card--text'>Students at Connections Academy collaborate on projects together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hwi;