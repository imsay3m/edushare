import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Courses from "../pages/Courses";


const Pages = () => {
    return (
        <>
            <Routes>
                <Route element={<Homepage/>} path="/"/>
                <Route element={<Courses/>} path="/courses"/>
                <Route element={<Contact/>} path="/contact"/>
                <Route element={<About/>} path="/about"/>
            </Routes>
        </>
    );
};

export default Pages;