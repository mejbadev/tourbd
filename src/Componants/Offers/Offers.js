import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://evil-demon-51495.herokuapp.com/offers')
        .then(res=>res.json())
        .then(data=>{
            setOffers(data);
            setIsLoading(false)
        })
    },[])
    return (
        <div className='container mt-3' id='offer'>
             <h2 className='text-primary'>OFFERS</h2>
            <p className='text-info'>We provide you the BEST</p>
            <div className='offers-container mt-3 mb-2 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1'>
            {
                isLoading?<div className='mx-auto'>loading... <Spinner animation="border" variant="primary" /> </div> : offers.map( offer => <Offer key= {offer._id} offer= {offer}></Offer>)
            }
            </div>
            
        </div>
    );
};

export default Offers;