import React from 'react'

function BlogItem({heading, content, img, date}) {
    return (
        <div className="blogs-item">
            <div className="blogs-item-container">
                <div className="blogs-header">
                    <img src={img} alt="blogs-intro"/>
                </div>
                <div className="blogs-content">
                    <h1>{heading}</h1>
                    <p>{content}</p>
                    <p>{date}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogItem
