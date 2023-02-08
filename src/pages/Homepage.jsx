import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Partner from '../components/partner/Partner';
import Hwi from '../components/how-it-works/Hiw';
import Cart from '../components/cart/Cart';
// import Features from '../components/features/Features';
import Testimonial from '../components/testimonial/Testimonial';
import Pricing from '../components/pricing/Pricing';
import Footer from "../components/footer/Footer";



function Homepage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Partner />
            <Hwi />
            <Cart />
            {/* <Features /> */}
            <Testimonial />
            <Pricing />
            <Footer/>

        </>
    )
}

export default Homepage;