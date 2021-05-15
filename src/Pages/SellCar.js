import React, { useEffect } from 'react'
import "./SellCar.css"
import CarForm from "../Component/CarForm"
function SellCar() {

    useEffect(() => {
        window.scrollTo(0, 0)},[])

    return (
        <div className="sellcar">
            <div className="sellcar-container">
                    <CarForm/>
            </div>
        </div>
    )
}

export default SellCar
