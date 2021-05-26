import { useParams } from "react-router-dom"  
import React, { useEffect, useState } from 'react'
import CarDetail from '../Component/CarDetail'
import db from "../firebase"
import "./Cars.css"
import CarDiscuss from "../Component/CarDiscuss"
import {Button} from "../Component/Button.js"
import ChatInput from "../Component/ChatInput"
import {useAuth} from "../Context/AuthContext"
import ChatNoLogin from "../Component/ChatNoLogin"

function Cars() {
    const { carId } = useParams()
    const [carMessage, setCarMessage] = useState([])
    const [carDiscuss, setCarDiscuss] = useState([])
    const { currentUser } = useAuth()

    useEffect(() => {
        window.scrollTo(0, 0)


        db.collection("autocar").doc("sellcar").collection("cars").doc(carId).onSnapshot(snapshot=>{
            setCarMessage(snapshot.data())})

        db.collection("autocar").doc("sellcar").collection("cars").doc(carId).collection("message").orderBy("timestamp", "desc").onSnapshot(snapshot =>
            setCarDiscuss(snapshot.docs.map(doc => doc.data()))
        )
        
                
    }, [carId])
    const displayDiscussMessage= carDiscuss.map(items=>(
        <CarDiscuss username={items.username} message={items.message} timestamp={items.timestamp}/>
    ))
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

            {displayDiscussMessage}

            {currentUser ? <ChatInput carId={carId} />:<ChatNoLogin/>}

            <Button location="/carlist">Back to Car list</Button>
            {console.log(carDiscuss)}
        </div>
    )
}

export default Cars
