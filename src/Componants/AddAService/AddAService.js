import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddAService.css';
const AddAService = () => {
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        fetch('https://evil-demon-51495.herokuapp.com/addOffer', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            console.log('inserted data', data);
            reset();
        })
    }
    return (
        <div className='container mt-3'>
        <div className='offer-input'>
            <h2>Please Insert a Offer Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("placeName")} placeholder='placename' />
        <textarea {...register("description")} placeholder='description' />
        <input {...register("img")} placeholder='image-link'/>
        <input {...register("cost")} placeholder='cost'/>
        <input {...register("travelType")} placeholder='travel-type(Ex: Bus, Train, Plane)'/>
        <input {...register("duration")} placeholder='duration(Ex: 3 days, 1 week)'/>
        <input className="btn btn-primary w-25"type="submit" />
        </form>
        </div>
      
        </div>
    );
};

export default AddAService;