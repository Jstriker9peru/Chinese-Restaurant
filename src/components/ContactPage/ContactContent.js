import React from 'react';
import './ContactContent.scss';

const ContactContent = () => {
    const backgroundStyle = {
        backgroundImage: "url('/images/contact-background.jpg')",
        backgroundSize: 'cover',

    }
    return (
        <div className="contact-container">
            <div style={backgroundStyle} className="contact-hero">
                <div className="overlay">
                    <h1>Get In Touch With Us</h1>
                    <span>chineserestaurant@gmail.com</span>
                </div>
            </div>
            <section className="form-section">
                <form className="contact-form">
                    <div className="sub">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="sub">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="sub">
                        <label>Subject</label>
                        <input type="text" />
                    </div>
                    <div className="sub">
                        <label>Message</label>
                        <textarea />
                    </div>
                    <div className="sub">
                        <button className="submit-btn" type="submit">Send</button>
                    </div>
                </form>
                <div className="contact-text">
                    <h2>Contact Us</h2>
                    <p>We are here to assist you in any way we can. Send us a message with any questions about the services that we provide</p>
                    <p>Let us know how much you enjoy our food!</p>
                </div>
            </section>
        </div>
    )
}

export default ContactContent;
