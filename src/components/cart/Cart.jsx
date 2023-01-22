import React from 'react';
import './cart.scss';
import dataScience from '../../assets/images/cart/ds.png';
import machineLearning from '../../assets/images/cart/ml.png';
import realApplication from '../../assets/images/cart/ra.png';
function Cart() {
    return (
        <>
            <div className="container course">
                <div className="d-flex justify-content-between align-items-center course__header">
                    <h2 className="course__heading">How Our Online Public School Works</h2>
                    <button className='btn course__btn' type='button'>View all courses</button>
                </div>
                <div className="carts">
                    <div className="cart__item">
                        <img className='cart__img' src={dataScience} alt="Data Science" />
                        <h4 className='cart__text'>Hands-On Python & R In Data Science</h4>
                        <div className="cart__info">
                            <p><i class="fa-solid fa-users"></i>1,45,690</p>
                            <p><i class="fa-solid fa-clock"></i>4 monts</p>
                        </div>
                        <button className='btn cart__btn' type='button'> <i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    </div>
                    <div className="cart__item">
                        <img className='cart__img' src={machineLearning} alt="Machine Learning" />
                        <h4 className='cart__text'>Science and Machine Learning Bootcamp</h4>
                        <div className="cart__info">
                            <p><i class="fa-solid fa-users"></i>1,45,690</p>
                            <p><i class="fa-solid fa-clock"></i>4 monts</p>
                        </div>
                        <button className='btn cart__btn cart__btn--color' type='button'> <i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    </div>
                    <div className="cart__item">
                        <img className='cart__img' src={realApplication} alt="Python Real Application" />
                        <h4 className='cart__text'>Hands-On Python & R In Data Science</h4>
                        <div className="cart__info">
                            <p><i class="fa-solid fa-users"></i>1,45,690</p>
                            <p><i class="fa-solid fa-clock"></i>4 monts</p>
                        </div>
                        <button className='btn cart__btn' type='button'> <i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;