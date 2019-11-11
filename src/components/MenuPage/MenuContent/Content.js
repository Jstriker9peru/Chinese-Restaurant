import React, { useState, useEffect } from 'react';
import { mealInfo } from '../../../data/MenuData';
import Title from '../../Title/Title';
import MealCard from './MealCard/MealCard';
import './Content.scss';

const Content = ({ param }) => {
    const [info, setInfo] = useState({ category: 'none', meals: [{id: 0}] });
    useEffect(() => {
        let correct = mealInfo.find(el => el.category === param);
        setInfo(correct);
    }, [param])

    
    return (
        <div className="content">
            <Title title={info.category} />
            <div className="meals-container">
                {info && info.meals.map(meal => {
                    const { id } = meal;
                    return (
                        <MealCard key={id} info={meal} />
                    )
                })}
            </div>
        </div>
    )
}

export default Content;
