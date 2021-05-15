import BoxItem from './BoxItem'
import "./FeatureBlog.css"
import React, { useEffect, useState } from 'react'
import db from "../firebase"

function FeatureBlog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        db.collection("autocar").doc("blogs").collection("blog").orderBy("date","desc").onSnapshot(
            snapshot=>{
                setBlog(snapshot.docs.map(doc=>({
                    id:doc.id,
                    heading:doc.data().heading,
                    content:doc.data().content,
                    date:doc.data().date,
                    img:doc.data().img
                })))
            }
        )

    }, [])
    return (
<div className="blog">
            <div className="blog-header">
                <h1>New Car Reviews</h1>
                <p>Our expert reviewers report back with the latest</p>
            </div>
            <div className="blog-container">
                <div className="blog-wrapper">
                    <ul className="box-items">
                    {blog.slice(0,2).map(item=>(<BoxItem src={item.img} id={item.id} heading={item.heading}/>))}
                    </ul>
                    <ul className="box-items">
                    {blog.slice(3,6).map(item=>(<BoxItem src={item.img} id={item.id} heading={item.heading}/>))}

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default FeatureBlog
