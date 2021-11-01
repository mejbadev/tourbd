import { reload } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useAuth();
    const [updateOrder, setUpdateOrder] = useState({});

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://evil-demon-51495.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
            setIsLoading(false);
          
        })
    },[user.email])

    const handleUpdate =(id)=>{
        const url= `https://evil-demon-51495.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
            putOrder(data, id);
        })

    }

    const putOrder =(data, id)=>{
        const url= `https://evil-demon-51495.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({...data, status:"Approved"})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('updated successfully! Plz Reload The page');
            }
            
        });
    }
    const handleDelete=(id)=>{
        const url= `https://evil-demon-51495.herokuapp.com/orders/${id}`;
        console.log(id);
        fetch(url, {
            method: 'DELETE'
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
            alert('Deleted successfully');
            const remaining = orders.filter(order=>order._id !== id);
            setOrders(remaining);
            }
        })
    }
    return (
        <div className='container mt-3'>
            <div className='row row-cols-lg-3 row-cols-1'>
                {
                     isLoading?<div className='mx-auto'>loading... <Spinner animation="border" variant="primary" /> </div>:orders.map(order=><div className='col'>
                     <div className="card text-dark bg-info mb-3" >
                     <div className="card-header"><h4 className='text-warning bold'>{order.placeName}</h4></div>
                     <div className="card-body">
                         <h6 className="card-title text-primary">{order.name}</h6>
                         <h6 className="card-title text-primary">{order.email}</h6>
                         <h6 className="card-title text-success">Status: {order.status}</h6>
                         <div className='d-flex justify-content-around'>
                         <button onClick={()=>handleUpdate(order._id)} className='btn btn-success'>Approve</button>
                         <button onClick={()=>handleDelete(order._id)} className='btn btn-danger'>Delete</button>
                         </div>
                     </div>
                 </div>
                 </div>)
                }    
            </div> 
            
        </div>
    );
};

export default ManageOrders;