import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>AutoCar</h1>
            <p>what are you waiting</p>
            <div className="hero-btn">
                <Button location={"/carlist"} buttonStyle="btn--primary" buttonSize="btn--large">
                    Explore!
                </Button>

            </div>
            
        </div>
    )
}

export default HeroSection
