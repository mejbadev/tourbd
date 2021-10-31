import React, { useState } from 'react';

const ManageOrder = (props) => {
    const {email, _id, name, placeName, duration, status } = props.order;
    console.log(_id);
    const [state, setState] = useState(status);

    return (
        <div className='col'>
            <div className="card text-dark bg-info mb-3">
            <div className="card-header"><h4 className='text-warning bold'>{placeName}</h4></div>
            <div className="card-body">
                <h6 className="card-title text-primary">{name}</h6>
                <p className="card-title text-primary px-2">{email}</p>
                <h6 className="card-title text-success">Status: {state}</h6>
                <div className='d-flex justify-content-around'>
                <button className='btn btn-success'>Approve</button>
                <button className='btn btn-secondary'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
</div>
        </div>
    );
};

export default ManageOrder;