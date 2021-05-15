import React from 'react'
import LoginForm from '../Component/LoginForm'
import { AuthProvider } from '../Context/AuthContext'
import "./SignIn.css"

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-form">
                <AuthProvider>
                    <LoginForm/>
                </AuthProvider>
                </div>

                <div className="login-image">  
                </div>
            </div>
        </div>
    )
}

export default Login
