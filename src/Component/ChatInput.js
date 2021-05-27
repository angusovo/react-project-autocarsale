import React, { useState } from 'react'
import db from "../firebase"
import firebase from "firebase"
import {useAuth} from "../Context/AuthContext"
import { Button } from '@material-ui/core'
import avatar from "../Component/images/avatar.png"
function ChatInput({ carId, sellerId}) {
    const {currentUser} = useAuth()
    const [input, setInput] = useState("")

    const sellerMessage = () => {
        if (sellerId === currentUser.uid) {
            return `${currentUser.email}(seller)`
        }
        else {
            return currentUser.email
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        db.collection("autocar").doc("sellcar").collection("cars").doc(carId).collection("message").add(
            {
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: sellerMessage(),
                
            }
        ) 
        setInput("")
    
    }

    const handleChange= e=>{
        setInput(e.target.value)
    }
    return (
        <div className="message_input">
            <img src={avatar} alt="user avatar"/>
            <form>
                {sellerId===currentUser.uid?
                <p className="message_seller">{currentUser.email}(seller)</p>:
                currentUser.email}
                <textarea placeholder="enter your comment" onChange={handleChange}/>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>enter</Button>
            </form>
        </div>
    )
}

export default ChatInput
