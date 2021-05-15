import React from 'react'
import "./SellCarInfo.css"
import step1 from "../Component/images/step1.jpg"
import step2 from "../Component/images/step2.jpg"
import step3 from "../Component/images/step3.jpg"
import { Link } from 'react-router-dom'
function SellCarInfo() {

    window.scroll(0,0)
    return (
        <div className="sellcar-step">
            <div className="sellcar-step-header">
                <h1>SELLING A USED CAR IN AUTOCAR</h1>
            </div>

            <div className="sellcar-step-container">
                <div className="sellcar-box-img">
                    <img src={step1} alt="step1"/>
                </div>
                <div className="sellcar-box-text">
                <i className="fas fa-hand-holding-usd"></i>
                <h2>Take good photographs</h2>
                    <p>Trading the car to a dealer is convenient but you will probably get a 
                        lot less than </p>
                </div>
                <div className="sellcar-box-img">
                    <img src={step2} alt="step2"/>
                </div>
                <div className="sellcar-box-text">
                    <i className="fas fa-camera-retro"></i>
                    <h1>Set your price </h1>
                    <p>Price your car slightly above market if your vehicle has very few owners, 
                        low mileage, full service history and is in overall great condition</p>
                </div>
                <div className="sellcar-box-img">
                    <img src={step3} alt="step3"/>
                </div>
                <div className="sellcar-box-text">
                <i className="fas fa-car-side"></i>
                    <h2>List your car on <Link to="/"> AutoCar</Link></h2>
                    <p>You can easily check the going market price of similar car
                        models in 
                        <Link to="/carlist">AutoCar</Link>’s database. 
                        </p>
           
                </div>

            </div>
            <button className="sellcar-button">
                <Link to="/signup">REGISTER ACCOUNT!</Link>
            </button>
            
        </div>
    )
}

export default SellCarInfo
