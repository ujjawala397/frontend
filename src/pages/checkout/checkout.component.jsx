import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="heder-block">
                <span>Product</span>
            </div>
            <div className="heder-block">
                <span>Description</span>
            </div>
            <div className="heder-block">
                <span>Quantity</span>
            </div>
            <div className="heder-block">
                <span>Price</span>
            </div>
            <div className="heder-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className="total">
            <span>Total:Rs{total}</span>
        </div>
        <StripeCheckoutButton/>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);