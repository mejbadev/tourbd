import { reload } from '@firebase/auth';
import React from 'react';

const MyOrder = (props) => {
    const {email, name, placeName, duration, status, _id} = props.order;
    console.log(props);
    const handleDelete=(id)=>{
        const url= `http://localhost:5000/orders/${id}`;
        
        fetch(url, {
            method: 'DELETE'
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
            alert("deleted succesfully");
            }
        })
    }
    return (
        <div className='col'>
            <div className="card text-dark bg-info mb-3" >
            <div className="card-header"><h4 className='text-warning bold'>{placeName}</h4></div>
            <div className="card-body">
                <h6 className="card-title text-primary">{name}</h6>
                <h6 className="card-title text-primary">{email}</h6>
                <h6 className="card-title text-success">Status: {status}</h6>
                <div className='d-flex justify-content-around'>
                <button onClick={()=>handleDelete(_id)} className='btn btn-danger'>Delete</button>

                </div>
            </div>
</div>
        </div>
    );
};

export default MyOrder;