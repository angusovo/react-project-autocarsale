import React from 'react'

function SellingInfoItem({src, heading, text}) {
    return (
        <div className="selling-item">
            <div className="selling-item-container">
                <figure className="selling-img-wrap">
                <img className="selling-item-img" src={src} alt="info_service"/>
                </figure>
                <div className="selling-text">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}


export default SellingInfoItem
