import React from 'react';
import About from '../About/About';
import AddAService from '../AddAService/AddAService';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;