import React from 'react';
import { connect } from 'react-redux';
import Title from '../../Title/Title';
import MealCard from './MealCard/MealCard';
import './Content.scss';

const Content = ({ param, menuData }) => {
    
    return (
        <div className="content">
            <Title title={param} />
            <div className="meals-container">
                {menuData && menuData.filter(el => el.category === param).map(meal => {
                    const id = meal._id;
                    return (
                        <MealCard key={id} info={meal} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuData: state.main.menuData
    }
}

export default connect(mapStateToProps, null)(Content);
