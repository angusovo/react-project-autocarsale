import React from 'react'
import CarSpec from './CarSpec'
import seat_icon from "../Component/images/seat.png"
import cc_icon from "../Component/images/engine_cc.png"
import fuel_icon from "../Component/images/fuel.png"
import transmission_icon from "../Component/images/transmission.png"
import owner_icon from "../Component/images/owner.png"



function CarDetail({
    imgUrl, 
    carMake, 
    carModel, 
    price, 
    mileage, 
    year,
    phone,
    veriant,
    seat,
    transmission,
    cc,
    fuel,
        }) 
    {


    return (
        <div className="car-detail">
            <div className="car-detail-container">
                <div className="car-detail-header">
                    <div className="car-img-wrapper">
                        <img src={imgUrl} className="car-img" alt="car-outlook"/>
                    </div>
                    <div className="car-description">
                        <div className="car-description-header">
                            <div className="car-make">                        
                                <h2>{carMake}</h2>
                                <h1>{carModel}</h1>
                                <h2>{veriant}</h2>       
                            </div>
                 
                            <div className="car-price">
                                <h1>$:{price}</h1>
                                <div className="car-content">
                                    <h3>Tel: {phone}</h3>
                                    <a href={`https://wa.me/852${phone}`} >  
                                        <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                                        alt="wtsappicon"/>
                                    </a>
                                  
                                </div>
                            </div>
                            <div className="car-production">
                                <p>Mileage: <strong>{mileage}</strong></p>
                                <p>Production: <strong>{year}</strong></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="car-detail-footer">
                    <div className="car-footer-container">
                        <div className="car-footer-top">
                            <CarSpec src={seat_icon} text="Seat" content={seat}/>
                            <CarSpec src={cc_icon} text="Engine CC" content={cc}/>
                            <CarSpec src={transmission_icon} text="Transmission" content={transmission}/>
                            <CarSpec src={fuel_icon} text="Fuel" content={fuel}/>
                            <CarSpec src={owner_icon} text="Previous Owner" content="1"/>
                            
                        </div>
                        <div className="car-footer-bottom">
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default CarDetail
