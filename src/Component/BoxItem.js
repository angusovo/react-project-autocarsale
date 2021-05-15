import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function BoxItem({src, text,heading, id, path }) {
    const history = useHistory()

    const selectBlog = ()=>{
        history.push(`/blogs/${id}`)
    }
    return (
        <>
        <li className="box-item" onClick={selectBlog}>
            <Link className="box-item-link" to={path}>
                <figure className="box-item-pic-wrap">
                    <img 
                    className="box-item-img"
                    src={src} 
                    alt="test"/>
                </figure>
                <div className="box-item-info">
                    <h2>{heading}</h2>
                    <div className="box-item-text">
                        {text}
                    </div>
                </div>
            </Link>
        </li>
        </>

    )
}

export default BoxItem
