import * as yup from "yup"

export const SignInSchema = yup.object().shape({
    carModel: 
    yup.string().min(2, "Must be at least 2 characters")
    .max(30, "Must be at most 30 characters")
    .required("Required"),


    seat: 
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, 'Must be exactly 1 digits')
    .max(1, 'Must be exactly 1 digits')
    .required("Required"),

   
})

export const SignUpSchema = yup.object().shape({
    password: yup.string().required('Password is required'),
    password2: yup.string()
       .oneOf([yup.ref('password'), null], 'Passwords must match')

   
})