import React, { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/Firebase.initialize';
import { getAuth,GoogleAuthProvider,signInWithPopup, signOut,onAuthStateChanged } from "firebase/auth";



firebaseInitialize();
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const loginWithGoogle =() =>{
        return signInWithPopup(auth, provider);
    }
    const logout =()=>{
        
        signOut(auth)
        .then(()=>{
            setUser({});
            setLoading(false);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
             
            } else {
                setUser({});
                
            }
            setLoading(false);
    })
    
   
},[]);

    return {user, loginWithGoogle, logout, loading};
}
export default useFirebase;