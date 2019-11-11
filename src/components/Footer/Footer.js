import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <div className="icon-container"><i className="fab fa-instagram icon"></i></div>
                <div className="icon-container"><i className="fab fa-twitter icon"></i></div>
                <div className="icon-container"><i className="fab fa-facebook-f icon"></i></div>
            </div>
            <div>
                <p>3909  Kenwood Place, Orlando, FL 32801</p>
                <p>Hours Open: 12am - 8pm (7 days a week)</p>
            </div>
        </div>
    )
}

export default Footer;
