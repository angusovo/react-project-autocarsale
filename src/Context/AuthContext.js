import React, {useContext, useState, useEffect} from 'react'
import {firebaseApp} from "../firebase"


const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const signUp =(email,password)=> {
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
       
        }

    const login =(email, password)=>{
        return firebaseApp.auth().signInWithEmailAndPassword(email, password)

    }

    const logout =()=> {        
        return firebaseApp.auth().signOut()
    }

    useEffect(() => {
        const unsub= firebaseApp.auth().onAuthStateChanged(user=>{
            setCurrentUser(user)
            setIsLoading(false)
        })

        return unsub
        
    }, [])

    const value= {
        currentUser,
        signUp,
        error,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading&&children}
        </AuthContext.Provider>
    )
}
