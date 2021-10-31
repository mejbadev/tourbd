import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './AddAOrder.css';


const AddAOrder = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const {register, handleSubmit, reset}=useForm();
    const [offerId, setOfferId] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        fetch(`https://evil-demon-51495.herokuapp.com/offers/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setOfferId(data);
        })
    }, [])
    const onSubmit = data => {
        data.placeName = offerId.placeName;
        data.cost = offerId.cost;
        data.travelType= offerId.travelType;
        data.duration= offerId.duration;
        fetch('https://evil-demon-51495.herokuapp.com/addOrder', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            console.log('inserted data', data);
            alert('Succesfully added');
            reset();
        })
    }

    return (
        <div className='container mt-3'>
            <h5>Please add Order for <h5 className='text-info'>{offerId.placeName}</h5></h5>
        <div className='offer-input'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Your Name:</label>
        <input defaultValue={user.displayName} {...register("name")} />
        <label>Email:</label>
        <input defaultValue={user.email} {...register("email")}/>
        <label>Address:</label>
        <textarea  {...register("address")} placeholder='your address'/>
        <label>Mobile:</label>
        <input  {...register("mobile")} placeholder='mobile'/>
        <label>Status: </label>
        <input defaultValue='Pending' {...register("status")}/>
        <label>Journey Date:</label>
        <input type='date' {...register("date")}/>
        
        <input className="btn btn-primary w-25"type="submit" />
        </form>
        </div>
      
        </div>
    );
};

export default AddAOrder;