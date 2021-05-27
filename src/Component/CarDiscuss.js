import React from 'react'
import avatar from "../Component/images/avatar.png"
function CarDiscuss({ username, userImage, message, timestamp, uid, sellerId }) {
    return (
        <div className="car-discuss">
            <img src={avatar} alt="useravatar" />
            <div className="message_info">
                <h4>
                    <p className={username.includes("seller") ? "message_seller":null}>{username}</p>
                    <span className="message_time">{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default CarDiscuss
