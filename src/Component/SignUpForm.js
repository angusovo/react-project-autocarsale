import React, {useState} from 'react'
import {SignUpSchema} from "../Validation/SignValidation"
import {Formik, Form, useField} from "formik"
import { useAuth } from '../Context/AuthContext'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function SignUpForm() {
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
    const {signUp, error} = useAuth()
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    
    window.scroll(0,0)
    return (
        <Formik
            initialValues={{
                email:"",
                password:"",
                password2:"",
                
            }}

            validationSchema={SignUpSchema}

            onSubmit={ async(values, {resetForm})=>{
                
                setErrors("")
                setIsLoading(true)
                await signUp(values.email, values.password)
                .then((req)=>{
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
                    <h1>Become a member of AutoCar!</h1>
                    {errors && <Alert variant="danger">{errors}</Alert>}
                    <CustomTextInput label="Email:" name="email"/>
                    <CustomTextInput type="password" label="Password:" name="password"/>
                    <CustomTextInput type="password" label="Confirm your password" name="password2"/>
                    <button className="sign-up-button"type="submit">SIGN UP</button>
                    <p>Already have an account?
                        <Link to="/login">Log in</Link>
                        
                    </p>
                </Form>    

            )}
            
        </Formik>
    
    )
}

export default SignUpForm
