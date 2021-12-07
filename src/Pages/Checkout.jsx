import React, { useEffect, useState } from 'react';
import Address from '../components/Address';
import ReviewCart from '../components/ReviewCart';
import { commerce } from '../lib/commerce';

const Checkout = function( {cart, order, onCaptureCheckout, error } ){
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);
        } catch (error){
            console.log(error)
        }
    };
    generateToken();
}, [cart]);

    return (
        <div>
            <h1 class="text-uppercase text-center text-black faq-title">Checkout</h1>
            <hr class="store-header-line" />
            
            <div class="container">
                    <div class="p-5">
                    <div class="row g-5">
                        { checkoutToken && <ReviewCart checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout}
                        totalItems={cart.total_items} /> }
                        
                        { checkoutToken &&<Address /> }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Checkout