import React from 'react';
import Content from './MenuContent/Content';
import Sidebar from './MenuSidebar/Sidebar';
import CategoryPage from './MenuContent/CategoryPage';
import './MenuPage.scss';


const MenuPage = ({ match }) => {
    const paramType = match.params.type;
    return (
        <div className="menu-page-container">
            {paramType ? (
                <React.Fragment>
                    <Sidebar />
                    <Content param={paramType} />
                </React.Fragment>
            ) : (
                <CategoryPage />
            )}
        </div>
    )
}

export default MenuPage;
