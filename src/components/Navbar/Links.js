import React, { useState } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Links.scss';

const Links = ({ totalItems }) => {
    const linkNames = ['home', 'menu', 'contact', 'cart'];
    const [links] = useState(linkNames);
    return (
        <ul className="links">
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink className="main-link" to={`/${link}`}>
                        {(link === 'cart') ? 
                            (
                                <div className="cart-icon-container">
                                    <i className="fas fa-shopping-cart cart-icon"></i>
                                    <span className="my-cart-link">My Cart</span><span className="cart-number">({totalItems})</span>
                                </div>
                            )
                             : link}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        totalItems: state.totalItems
    }
}

export default connect(mapStateToProps, null)(Links);
