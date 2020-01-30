import React from 'react';
import Title from '../../Title/Title';
import CategoryCard from './CategoryCard/CategoryCard';
import './CategoryPage.scss';

const CategoryPage = ({ categories }) => {
    return (
        <div className="category-page">
            <Title title={'Categories'} />
            <div className="category-box">
                {categories.map((category, index) => {
                    return (
                        <CategoryCard key={index} info={category} />
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryPage;
