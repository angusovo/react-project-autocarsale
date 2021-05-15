import React from 'react'

function CarSpec({src,text,content}) {
    return (
        <div className="car-spec">
            <img src={src} alt="car_info"/>
            <h4>{text}</h4>
            <h2>{content}</h2>
            
        </div>
    )
}

export default CarSpec
