import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './CheckoutContent.scss';
import TotalSidebar from '../CartPage/TotalSidebar';


const CheckoutContent = () => {
    return (
        <div className="checkout-content">
            <Elements>
                <CheckoutForm />
            </Elements>
            <TotalSidebar />
        </div>
    )
}

export default CheckoutContent;
