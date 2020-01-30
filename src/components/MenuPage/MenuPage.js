import React from 'react';
import { connect } from 'react-redux';
import Content from './MenuContent/Content';
import Sidebar from './MenuSidebar/Sidebar';
import CategoryPage from './MenuContent/CategoryPage';
import './MenuPage.scss';


const MenuPage = ({ match, categories }) => {
    const paramType = match.params.type;
    return (
        <div className="menu-page-container">
            {paramType ? (
                <React.Fragment>
                    <Sidebar categories={categories} />
                    <Content param={paramType} categories={categories} />
                </React.Fragment>
            ) : (
                <CategoryPage categories={categories} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.main.categories
    }
}

export default connect(mapStateToProps, null)(MenuPage);
