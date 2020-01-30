import React from 'react';
import Category from './Category/Category';
import './Sidebar.scss';

const Sidebar = ({ categories }) => {
    return (
        <div className="sidebar">
            <div className="side-menu">
                <div className="">
                    <h2>Menu</h2>
                </div>
                <div className="categories">
                    <div className="category-container">
                        {categories.map(category => {
                            const { _id, name } = category;
                            return (
                                <Category key={_id} name={name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
