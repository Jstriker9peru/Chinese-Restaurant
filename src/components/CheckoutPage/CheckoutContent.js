import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './CheckoutContent.scss';


const CheckoutContent = () => {
    return (
        <div className="checkout-content">
            <Elements>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default CheckoutContent;
