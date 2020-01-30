import React from 'react';
import './TotalSidebar.scss';

const TotalSidebar = ({ total, totalItems, items }) => {
    const taxAmount = parseFloat((total * 0.085).toFixed(2));
    return (
        <div className="total-container">
            <div className="row"> 
                <span className="summary">Order Summary</span>
            </div>
            <div className="row">
                <p>Cart Subtotal ({totalItems} Items): </p>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className="row">
                <p>Tax (8.5%): </p>
                <span>${taxAmount}</span> 
            </div>
            <hr />
            <div className="row">
                <h2>Total: </h2>
                <span className="total-price">${(total + taxAmount).toFixed(2)}</span> 
            </div>
            <div className="button-row">
                <button className="checkout-btn">Place Order</button>
            </div>
        </div>
    )
}

export default TotalSidebar;
