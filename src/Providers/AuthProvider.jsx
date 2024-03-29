import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const updateUserPhoto = (name , photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }



    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    
    useEffect( ()=> {
       const unsubscribe = onAuthStateChanged( auth, currentUser => {
        setUser(currentUser)
        console.log('currentuser', currentUser);
        setLoading(false)

       })
       return () => {
            return unsubscribe()
       }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser,
        singIn,
        logOut,
        updateProfile

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;