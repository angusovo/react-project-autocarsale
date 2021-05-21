import React from 'react'
import BoxItem from './BoxItem'
import "./Introduction.css"

function Introduction() {
    return (
        <div className="intro">
            <div className="intro-header">
                <h1>Why AutoCar is your best trading platform?</h1>
                <p>we provide the best services</p>
            </div>
            <div className="intro-container">
                <div className="intro-wrapper">
                    <ul className="box-items">
                    <BoxItem path="/about" src="https://www.opptimo.com/images/highly-secured.png" heading="Highly Secured" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet" />
                    <BoxItem path="/about" src="https://icon-library.com/images/trusted-icon/trusted-icon-27.jpg" heading="Trusted Agents" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet" />
                    <BoxItem path="/about" src="https://images-na.ssl-images-amazon.com/images/I/511dTxcqHIL.png" heading="Get an offer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet" />
                    <BoxItem path="/about" src="https://www.zert.se/wp-content/uploads/2019/08/Support.png"
                    heading="Free Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet" />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Introduction
