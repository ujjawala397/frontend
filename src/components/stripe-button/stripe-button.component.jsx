import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=()=>{

    return (
        <StripeCheckout 
            label='Pay Now'
            name='spices'
            
        />
    );
};

export default StripeCheckoutButton;