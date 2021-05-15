import React from 'react'
import Contact from '../Component/Contact'
import "./About.css"

function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <h2>Contact Us</h2>
                </div>
                <div className="about-contact">
                    <Contact/>
                </div>
            </div>
        </div>
    )
}

export default About
