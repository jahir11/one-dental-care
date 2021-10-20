import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp()

const useFirebase = () => {
    const [user , setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {  
            setUser(result.user);
        }).catch((error) => {
            setError(error.massage)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    }, [])
    // create user email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegisterNow = (e) => {
        e.preventDefault()
        if(password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
            createUserWithEmailAndPassword(auth,email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('')
            }).catch(error=> {
                setError(error.message)
            })
    } 
    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            console.log(result.user);
            setError('')
        }).catch(error => {
            setError(error.massage)
        })
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        })
    }


    return {
        user,
        error,
        handleGoogleSignIn,
        handleEmail,
        handlePassword,
        handleRegisterNow,
        handleLogin,
        handleLogOut
    }
};

export default useFirebase;