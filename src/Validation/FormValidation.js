import * as yup from "yup"

export const formSchema = yup.object().shape({
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

    mileage: 
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be at least 1 characters")
    .max(7, "Must be at most 7 characters")
    .required("Required"),

    price:    
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be at least 1 characters")
    .max(8, "Must be at most 8 characters")
    .required("Required"),

    picUrl:yup.string().notRequired(),

    carVeriant: yup.string().min(2, "Must be at least 2 characters")
    .max(30,"Must be at most 30 characters")
    .notRequired(),

    year:     
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits')
    .required("Required"),

    cc:    
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, 'Must be at least 2 digits')
    .max(4, 'ust be at most 4 digits')
    .required("Required"),

    owner:    
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "If this is a first hand car, type 0")
    .max(2, 'Must be at most 2 digits')
    .required("Required"),

    transmission:
    yup.string()
    .oneOf(["Auto","Manual"],"Select the transmission!")
    .required("Required"),

    fuel:
    yup.string()
    .oneOf(["Petrol","Eletric","Hybrid"],"Select the fuel!")
    .required("Required"),

    phone:
    yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(8, 'Must be exactly 8 digits')
    .max(8, 'Must be exactly 8 digits')
    .required("Required"),

    carMake:yup.string()
    .oneOf(["BMW","AUDI","FERRARI","TOYOTA","HONDA","NISSAN"],"Please select a car make!")
    .required("Required"),
})