import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';
import SectionFive from '../SectionFive/SectionFive';
import SectionFour from '../SectionFour/SectionFour';
import SectionOne from '../SectionOne/SectionOne';
import SectionSeven from '../SectionSeven/SectionSeven';
import SectionSix from '../SectionSix/SectionSix';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <Footer />
        </>
    );
};

export default Home;