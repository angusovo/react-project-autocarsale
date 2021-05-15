import { useParams } from "react-router-dom"  
import React, { useEffect, useState } from 'react'
import CarDetail from '../Component/CarDetail'
import db from "../firebase"
import "./Cars.css"

function Cars() {
    const { carId } = useParams()
    const [carMessage, setCarMessage] = useState([])

    useEffect(() => {
        db.collection("autocar").doc("sellcar").collection("cars").doc(carId).onSnapshot(snapshot=>{
            setCarMessage(snapshot.data())})
            
        window.scrollTo(0, 0)
                
    }, [carId])


    return (
        <div className="cars">
        
            <CarDetail 
            imgUrl={carMessage.picUrl} 
            carMake={carMessage.carMake} 
            carModel={carMessage.carModel} 
            price={carMessage.price} 
            mileage={carMessage.mileage} 
            year={carMessage.year} 
            phone={carMessage.phone}
            veriant={carMessage.carVeriant} 
            seat={carMessage.seat} 
            cc={carMessage.cc}
            fuel={carMessage.fuel} 
            transmission={carMessage.transmission}
            />
        </div>
    )
}

export default Cars
