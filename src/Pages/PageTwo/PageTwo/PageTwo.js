import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';
import SectionFour from '../SectionFour/SectionFour';
import SectionOne from '../SectionOne/SectionOne';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';

const PageTwo = () => {
    return (

        <>
            <HeaderNavbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />

            <Footer />
        </>

    );
};

export default PageTwo;