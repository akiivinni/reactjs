


import React from 'react';
import Navigation from '../navbar/navbar';
import Aboutpage from '../../../../homedata/about';
import FooterData from '../../../../homedata/footer';

const Aboutus = () => {
    return (
        <>
            This is a simple page.
            <Navigation></Navigation>
            <Aboutpage></Aboutpage>
            <FooterData></FooterData>
        </>
    );
}

export default Aboutus;