import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import "./SellingInfo.css"
import SellingInfoItem from './SellingInfoItem'

function SellingInfo() {
    return (
        <div className="selling-info">
            <div className="selling-container">
                <SellingInfoItem 
                src="https://www.carmax.com/sell-my-car/dist/854daa31142f30eb4a20a25d1328822d.png"
                heading="We’ll buy yours even if you don’t buy ours"
                text="Whether it goes on our lot or to auction, we want to make an offer for your car."
                />
                <SellingInfoItem 
                src="https://www.carmax.com/sell-my-car/dist/54e330b787c47d9c982a3767602e9975.png"
                heading="Same-day payment, 7-day offer"
                text="Leave with payment in hand or take up to 7 days to compare your options."
                />
                <SellingInfoItem 
                src="https://www.carmax.com/sell-my-car/dist/3859c2cfb35a122d6b8eb0ae5fb1ce7a.png"
                heading="An offer you can count on"
                text="No matter where you sell, start with a custom offer from CarMax."
                />
                <Button><Link to="/sellcar">Click to Sell!</Link></Button>
            </div>
        </div>
    )
}

export default SellingInfo
