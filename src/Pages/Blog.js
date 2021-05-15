import React, { useEffect, useState } from 'react'
import db from "../firebase"
import { useParams } from "react-router-dom"  
import BlogItem from '../Component/BlogItem'
import "./Blog.css"
function Blog() {
    const [blogMessage, setBlogMessage] = useState([])
    const { blogId } = useParams()

    useEffect(() => {
        db.collection("autocar").doc("blogs").collection("blog").doc(blogId).onSnapshot(snapsoht=>{
            setBlogMessage(snapsoht.data())
        }
        )
        window.scrollTo(0, 0)

    }, [blogId])
    return (
        <div className="blogs">
            <BlogItem heading={blogMessage.heading} content={blogMessage.content} img={blogMessage.img}/>
        </div>
    )
}

export default Blog
