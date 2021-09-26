import React, { useContext, useState,useEffect } from 'react'
import '../firebase';
import {getAuth,signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [currentUser,setCurrentUser] = useState();

    // event listener 
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe =  onAuthStateChanged(auth,(user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // signup function
    async function signup(email,password,username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth,email,password);

        // update profile
        await updateProfile(auth.currentUser,{
            displayName:username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    }

    //login Function
    async function login(email,password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Logout function
    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
