import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ info }) => {
    const { name, imageURL, classes } = info;
    return (
        <div className={`category-card ${classes}`}>
            <NavLink to={`./menu/${name}`}>
                <div className="category-image-container">
                    <img className="category-image" alt={name} src={`/images${imageURL}`} /> 
                    <div className="name-container">
                        <h4 className="category-name">{name}</h4>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CategoryCard;
