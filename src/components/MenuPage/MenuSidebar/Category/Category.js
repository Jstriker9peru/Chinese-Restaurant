import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Category.scss';

const Category = ({ name }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    const styles = {
        background: 'url(/images/silver-background.jpg)'
    }

    return (
        <div style={styles} className="category">
            <NavLink className="sidebar-link" to={`/menu/${name}`}>
                <div className="main">
                    <h3 className="name" onClick={toggleOpen}>{name}</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default Category;
