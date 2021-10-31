import React from 'react';
import Banner1 from '../../images/banner1.jpg';

const About = () => {
    return (
        <div className='container mt-3 ' id='about'>
            <h2 className='text-primary'>ABOUT</h2>
            <p className='text-info'>Get Knowledge about us</p>
            <div className='about-us mt-2'>
                <img className='w-100' src={Banner1} alt=""/>
                <div className='detains'>
                    <h3><span>Tour BD</span>| Largest Tour Booking Website </h3>
                    <p className='text-justify'> Tour BD is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe. Tour BD is revolutionizing the way we book travel services. With Tour BD’s website and mobile app, booking your flight, hotel or holiday become more fun that you would think. With exciting games and real rewards like free trips and air ticket makes Tour BD more fun to use! You can also win TripCoin by playing games and booking service from Tour BD, that you can use to avail discount.

                    </p>
                </div>

            </div>
            
        </div>
    );
};

export default About;