import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        return signInWithPopup(auth, provider);

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])


    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in ;
                // console.log(result.user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
            });
    };

    const handleUserLogin = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in ;
                // console.log(result.user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
            });
    };

    return {
        user,
        handleGoogleSignin,
        logOut,
        handleUserRegister,
        handleUserLogin

    }
};

export default useFirebase;