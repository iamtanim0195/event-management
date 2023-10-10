import { createContext, useEffect } from "react"
import app from "./firebase.config";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,

} from "firebase/auth"
import { useState } from "react";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleSignIn = (value) => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe  =  onAuthStateChanged(auth, currnetUser =>{
            console.log("observing current user", currnetUser);
            setUser(currnetUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        googleSignIn,
        createUser,
        signIn,
        logOut
        

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider