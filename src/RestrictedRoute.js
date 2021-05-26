import React from 'react'
import { Route, Redirect } from "react-router-dom"
import {useAuth} from "./Context/AuthContext"

const RestrictedRoute=({children, memberOnly, ...rest})=>{
    const { currentUser } = useAuth()

    return (
        <Route {...rest} render={()=> 

            !currentUser? (children):(<Redirect to={"/"}/>)
        }/>
    )
}

export default RestrictedRoute
