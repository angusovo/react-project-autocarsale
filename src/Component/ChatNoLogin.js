import { Link } from '@material-ui/core'
import React from 'react'

function ChatNoLogin() {
    return (
        <div className="chat_nologin">
            <div className="">You have to login before leaving a comment! </div>
            <div className="">
                <Link href="/login">Login</Link> or <Link href="/signup"> Register</Link> to comment
            </div>
            
            

        </div>
    )
}

export default ChatNoLogin
