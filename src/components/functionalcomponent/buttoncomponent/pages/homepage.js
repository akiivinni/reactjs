import React from 'react';
import Navigation from '../navbar/navbar';
import ImageSlider from '../image/imageslider';
import HomeData from '../../../../homedata/homedata';
import MusicCards from '../../../../homedata/musiccards';

import FooterData from '../../../../homedata/footer';

const Home = () => {
    return (
        <>
            This is a simple page.
            <Navigation></Navigation>
            <ImageSlider></ImageSlider>
            <HomeData></HomeData>
            <MusicCards></MusicCards>
            <FooterData></FooterData>

        
        </>
    );
}

export default Home;
