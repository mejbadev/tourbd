import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const {user, loginWithGoogle, loading, logout} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect = location.state?.from || '/home';
    console.log(redirect);

    const googleLogin =()=>{
       
        loginWithGoogle()
        .then(result=>{
            history.push(redirect);
        })
    }
    console.log(user);
    return (
        <div className='mt-5'>
            <button onClick={googleLogin} className='btn btn-info'>Google Login</button>
        </div>
    );
};

export default Login;