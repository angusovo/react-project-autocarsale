import React from 'react'

function Message({ username, userImage, message, timestamp }) {
    return (
        <div className="message">
            <img src={userImage} alt="user image" />
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

export default Message
