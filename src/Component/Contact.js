import React from 'react'

function Contact() {

    window.scroll(0,0)
    
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact us</h1>
                
            </div>
            <div className="contact-content">
                <div className="contact-input">
                    <form className="contact-form">
                        <label>Your Email:</label>
                        <input type="text" placeholder="Email" />
                        <label>Your Name:</label>
                        <input type="text" placeholder="Name"/>
                        <label>Your Message:</label>
                        <textarea className="contact-message" ></textarea>  
                        <button className="contact-btn" onClick={()=>{alert("thanks for your adivce!")}}>SUMBIT</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="info-box">
                        <div className="info-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-text">
                            <h3>Phone:</h3>
                            <p>+12345678</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="info-icon">
                            <i className="fab fa-internet-explorer"></i>
                        </div>
                        <div className="info-text">
                            <h3>Web:</h3>
                            <p>autocar.com</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-text">
                            <h3>Email:</h3>
                            <p>awer@dsafdas.com</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="info-icon">
                            <i className="fas fa-fax"></i>
                        </div>
                        <div className="info-text">
                            <h3>Fax:</h3>
                            <p>+12345678</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Contact
