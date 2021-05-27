import React, {useState} from 'react'
import {Button, Card, CardContent, Link, Typography} from "@material-ui/core"
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik"
import { Select, TextField } from "formik-material-ui"
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { formSchema } from "../Validation/FormValidation"
import "./CarForm_multi.css"
import db, { firebaseApp } from "../firebase"
import firebase from "firebase"
import { useAuth } from '../Context/AuthContext';

export default function CarForm_multi() {
    return (
        <Card>
            <CardContent>
                <FormikStepper
                initialValues={{
                    carMake: "",
                    carModel: "",
                    seat: "",
                    transmission: "",
                    mileage: "",
                    price: "",
                    picUrl: "",
                    carVeriant: "",
                    year: "",
                    cc: "",
                    owner: "",
                    fuel: "",
                    phone: "",
                }}

                validationSchema={formSchema}

                >
                        {/* step1 */}
                    <div className="carform_step1">
                        <Typography>Step1:</Typography>
                        <Link href="/sellcarinfo"><Typography>Struggle with the form? click here for more info</Typography></Link>

                        <InputLabel htmlFor="carMake">Car Make:</InputLabel>
                        <Field name="carMake" component={Select} label="Car Make:">
                            <MenuItem value={"BMW"}>BMW</MenuItem>
                            <MenuItem value={"BENZ"}>Mercedez</MenuItem>
                            <MenuItem value={"TOYOTA"}>TOYOTA</MenuItem>
                            <MenuItem value={"HONDA"}>HONDA</MenuItem>
                            <MenuItem value={"AUDI"}>AUDI</MenuItem>
                            <MenuItem value={"NISSAN"}>NISSAN</MenuItem>
                            <MenuItem value={"FERRARI"}>FERRARI</MenuItem>
                        </Field>
                        <Field name="carModel" component={TextField} label="carModel" />
                        <Field label="Car Veriant/Version:" component={TextField} name="carVeriant" placeholder="e.g. sport version/coupe" />
                        <Field label="Production Year:" name="year" component={TextField} placeholder="Production year of your car" />
                    </div>

                    <div className="carform_step2">
                        {/* step2 */}
                        <Typography>Step2: </Typography>

                        <Field label="Engine Capacity:" name="cc" placeholder="CC?" component={TextField} />
                        <InputLabel htmlFor="fuel">Car Fuel:</InputLabel>
                        <Field label="Car fuel:" name="fuel" component={Select}>
                            <MenuItem value={"Petrol"}>Petrol</MenuItem>
                            <MenuItem value={"Eletric"}>Eletric</MenuItem>
                            <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                        </Field>
                        <Field label="Seats:" name="seat" placeholder="No of seats(include driver)?" component={TextField} />
                        <Field label="No. of previous owner:" name="owner" placeholder="0 means first hand" component={TextField} />
                        <InputLabel htmlFor="transmission">Car's transmission</InputLabel>
                        <Field label="Transmission:" name="transmission" component={Select}>
                            <MenuItem value={"Auto"}>Auto</MenuItem>
                            <MenuItem value={"Manual"}>Manual</MenuItem>
                        </Field>
                        <Field label="Mileage:" name="mileage" component={TextField}/>
                    </div>

                    <div className="carform_step3">
                        <Typography>Step3: </Typography>
                        {/* step3 */}
                        <Field label="Your Contact No:" name="phone" component={TextField} />
                        <Field label="Price:" name="price" component={TextField} />

                        </div>

                </FormikStepper>
            </CardContent>
        </Card>
    )
}


export function FormikStepper({children, ...props}){
    const childrenArray = React.Children.toArray(children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]
    const handleBack = ()=> setStep(pre=>pre-1)
    const handleForward =() => setStep(pre=>pre+1)
    const [picUrl, setPicUrl] = useState()
    const isLastStep =()=>(
        step===childrenArray.length -1
    )
    const handleUpload = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setPicUrl(await fileRef.getDownloadURL())

    }
    const {currentUser}=useAuth()

    const nextButton =()=>{
        return <Button onClick={handleForward}>Next</Button>
    }
    const submitButton = () => {
        return <Button type="submit">Submit</Button>
    }
    return <Formik {...props} 

        onSubmit={(values, { resetForm },) => {
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
                uid: currentUser.uid


            })
            alert("uploaded!")
            resetForm()
            setStep(0)

        }}
    >
        
        {formik => (
        <Form autoComplete="off">
            {currentChild}
            {isLastStep() ? 
            <input type="file" name="file" onChange={handleUpload} /> 
            : null}
            {step>0?
            <Button onClick={handleBack}>Back</Button>:
            null
            }
            {isLastStep()?submitButton():nextButton()}

        </Form>
        )}
    </Formik>
}