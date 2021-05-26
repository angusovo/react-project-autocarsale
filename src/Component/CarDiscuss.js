import React from 'react'
import avatar from "../Component/images/avatar.png"
function CarDiscuss({ username, userImage, message, timestamp }) {
    return (
        <div className="car-discuss">
            <img src={avatar} alt="user image" />
            <div className="message_info">
                <h4>
                    {username}
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
