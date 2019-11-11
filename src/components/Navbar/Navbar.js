import React from 'react';
import Links from './Links';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="logo-link" to={`/home`}>
                <div className="logo">Little China</div>
            </NavLink>
            <Links />
        </div>
    )
}

export default Navbar;
