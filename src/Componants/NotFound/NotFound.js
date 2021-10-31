import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/not-found.jpg'
const NotFound = () => {
    return (
        <div className="container mt-3">
            <img className='img-fluid d-block mx-auto' src={notfound} alt="" />
            <Link to='/home'><button className='btn btn-primary mt-3 mb-3'>Got to home</button></Link>
        </div>
    );
};

export default NotFound;