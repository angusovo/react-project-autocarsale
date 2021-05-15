import React from 'react'
import SignUpForm from '../Component/SignUpForm'
import { AuthProvider } from '../Context/AuthContext'
import "./SignUp.css"

function SignUp() {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-form">
                    <AuthProvider>
                        <SignUpForm/>
                    </AuthProvider>
                </div>

                <div className="signup-image">
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp
