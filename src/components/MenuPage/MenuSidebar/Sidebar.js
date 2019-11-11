import React, { useState } from 'react';
import Category from './Category/Category';
import { mealInfo } from '../../../data/MenuData';
import './Sidebar.scss';

const Sidebar = () => {
    const [categoryNames] = useState(mealInfo);
    return (
        <div className="sidebar">
            <div className="side-menu">
                <div className="">
                    <h2>Menu</h2>
                </div>
                <div className="categories">
                    <div className="category-container">
                        {categoryNames.map((name, index) => {
                            const { category, meals } = name;
                            return (
                                <Category key={index} name={category} meals={meals} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
