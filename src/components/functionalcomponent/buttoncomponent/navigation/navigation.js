import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/homepage";
import Aboutus from "../pages/aboutus";
import Contactus from "../pages/contactus";
import CardComponents from "../../../../homedata/pro";
import ProductScreen from "../../../../homedata/productus";

const NavigationStack = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* List of routes in the app */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/product" element={<CardComponents/>} />
                <Route path="/:category/:product" element={<ProductScreen />} /> 

            </Routes>
        </BrowserRouter>
    );
}

export default NavigationStack;
