import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import { categories } from '../../../data/MenuData';
import './CategoryPage.scss';
import Title from '../../Title/Title';

const CategoryPage = () => {
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
