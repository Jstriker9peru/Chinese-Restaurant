import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeContent.scss';

const HomeContent = () => {
    const divStyle = {
        backgroundImage: 'url(/images/chinese-table.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '80% 80%'
    }
    return (
        <div className="home-content">
            <section className="home-grid">
                <div className="grid-container grid-1">
                    <img className="home-image" src='/images/chinese-food-hero.jpg' alt="body" /> 
                </div>
                <div className="grid-container grid-2">
                    <div className="about-cover">
                        <h2>About Us</h2>
                        <p>An authentic chinese restuarant that provides the best quality food at an affordable price</p>
                    </div>
                </div>
                <div className="grid-container grid-3">
                    <img className="home-image img-3" src='/images/chinese-food-1.jpg' alt="body" /> 
                </div>
                <div className="grid-container grid-4"
                style={divStyle}>
                        <div className="menu-cover">
                            <NavLink className="menu-link" to={`./menu`}>
                                <h2>Menu</h2>
                            </NavLink> 
                        </div>
                </div>
                <div className="grid-container grid-5">
                    <img className="home-image" src='/images/chinese-food-cook.jpg' alt="body" /> 
                </div>
            </section>
        </div>
    )
}

export default HomeContent;
