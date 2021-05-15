import React,{ useState } from 'react'
import {Formik, Form, useField} from "formik"
import {formSchema} from "../Validation/FormValidation"
import "./CarForm.css"
import db,{ firebaseApp} from "../firebase"
import firebase from "firebase"


function CarForm() {
    const [picUrl, setPicUrl] = useState()

    const handleUpload=async(e)=>{
        const file = e.target.files[0]
        const storageRef = firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name)

        await fileRef.put(file)
        setPicUrl(await fileRef.getDownloadURL())
        
    }

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
    
    const CustomSelect = ({label,...props})=>{
        const [field, meta] = useField(props)
            return(
                <>
                <label htmlFor={props.id||props.name}>{label}</label>
                    <select {...field}{...props}/>
                {meta.touched && meta.error? (
                    <div className="error">{meta.error}</div>
                ): null}
                </>
            )
    }


    return (
        <Formik
            initialValues={{
                carMake:"",
                carModel:"",
                seat:"",
                transmission:"",
                mileage:"",
                price:"",
                picUrl:"",
                carVeriant:"",
                year:"",
                cc:"",
                owner:"",
                fuel:"",
                phone:"",
            }}

            validationSchema={formSchema}

            onSubmit={(values, {resetForm}, )=>{
                db.collection("autocar").doc("sellcar").collection("cars").add({
                    carMake: values.carMake.toUpperCase(),
                    carModel: values.carModel.toUpperCase(),
                    seat: values.seat,
                    transmission: values.transmission,
                    mileage: values.mileage,
                    price: values.price,
                    picUrl: picUrl,
                    carVeriant: values.carVeriant,
                    year: values.year,
                    cc: values.cc,
                    owner: values.owner,
                    fuel: values.fuel,
                    phone: values.phone,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
        
                })
                    alert("uploaded!")
                    resetForm()

            }}
            >

            {formik =>(
            <Form>
                <h1>Car Selling Form:</h1>
                <CustomSelect label="Car Make:" name="carMake">
                    <option selected>Select your Car Make</option>
                    <option value="BMW">bmw</option>
                    <option value="AUDI">audi</option>
                    <option value="FERRARI">ferrari</option>
                    <option value="TOYOTA">toyota</option>
                    <option value="HONDA">Honda</option>
                    <option value="NISSAN">Nissan</option>
                </CustomSelect>
                <CustomTextInput label="carModel" name="carModel" placeholder="enter your car model"/>
                <CustomTextInput label="Car Veriant/Version:" name="carVeriant" placeholder="e.g. sport version/coupe"/>
                <CustomTextInput label="Production Year:" name="year" placeholder="Production year of your car"/>
                <CustomTextInput label="Engine Capacity:" name="cc" placeholder="CC?"/>
                <CustomSelect label="Car fuel:" name="fuel" defaultValue="Petrol">
                    <option selected>Select your car's fuel</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Eletric">Eletric</option>
                    <option value="Hybrid">Hybrid</option>
                </CustomSelect>
                <CustomTextInput label="Seats:" name="seat" placeholder="No of seats(include driver)?"/>
                <CustomTextInput label="No. of previous owner:" name="owner" placeholder=""/>
                <CustomSelect label="Transmission:" name="transmission" defaultValue="Auto">
                    <option selected>Select you car's transmission</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </CustomSelect>
                <CustomTextInput label="Mileage:" name="mileage" />
                <CustomTextInput label="Your Contact No:" name="phone" />
                <CustomTextInput label="Price:" name="price" />
                <label>Upload your image:</label>
                <input type="file" name="file" onChange={handleUpload}></input>
                <button type="submit">SUBMIT</button>
            </Form>    
            
            )}
            
        </Formik>
    )
}

export default CarForm
