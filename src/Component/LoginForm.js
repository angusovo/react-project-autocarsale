import React, {useState,} from 'react'
import {Formik, Form, useField} from "formik"
import { useAuth } from '../Context/AuthContext'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function LoginForm() {
    const CustomTextInput = ({label,...props})=>{
        const [field, meta] = useField(props)
            return(
                <>
                <label htmlFor={props.id||props.name}>{label}</label>
                <input className="text-input" {...field}{...props}/>
                {meta.touched && meta.error? (
                    <div className="error">{meta.error}</div>
                ): null}
                </>
            )
    }
    const {login,} = useAuth()
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    window.scroll(0,0)
    
    return (
        <Formik
        initialValues={{
            email:"",
            password:"",
            
        }}

        // validationSchema={SignUpSchema}

        onSubmit={ async (values, )=>{
                setErrors("")
                setIsLoading(true)
                await login(values.email, values.password)

                .then(()=>{
                    alert("success")
                    history.push("/")
                })
                
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        setErrors('Wrong password.');
                    } else {
                        setErrors(errorMessage);
                    }
                    console.log(error);
                  });
            
            setIsLoading(false)
            
        }
    }
        >

        {formik =>(

            <Form>
                <h1>LOGIN</h1>
                {errors && <Alert variant="danger">{errors}</Alert>}
                <CustomTextInput label="Email:" name="email"/>
                <CustomTextInput type="password" label="Password:" name="password"/>
                <button className="login-form-button" type="submit" disabled={isLoading}>LOGIN</button>
                <p>Need an account?
                    <Link to="/signup">Create Account</Link>                    
                </p>
            </Form>    

        )}
        
    </Formik>
    )
}

export default LoginForm
